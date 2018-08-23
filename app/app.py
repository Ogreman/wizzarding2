import aiohttp_jinja2
import iso8601
import jinja2
from aiohttp import ClientSession, ClientTimeout
from aiohttp.web import Application

from . import config
from . import routes
from . import settings


async def on_startup(app):
    app.http_session_pool = ClientSession(timeout=ClientTimeout(total=30))


async def on_cleanup(app):
    await app.http_session_pool.close()


def datetimeformat(value, format='%H:%M / %d-%m-%Y'):
    return iso8601.parse_date(value).strftime(format)


def create_app(config_name=None) -> Application:
    """App factory. Sets up routes and all plugins.
    """
    app_config = config.Config()
    app_config.from_object(settings)

    # NB: raises ConfigurationError if an object attribute is None
    config_name = (config_name or app_config["ENV"])
    app_config.from_object(getattr(config, config_name))

    app = Application(debug=settings.DEBUG, middlewares=[])

    # Store upper-cased configuration variables on app
    app.update(app_config)

    # Set up routes
    routes.setup(app)

    # Setup jinja2 environment
    env = aiohttp_jinja2.setup(
        app,
        loader=jinja2.PackageLoader("app", "templates"),
        context_processors=[aiohttp_jinja2.request_processor],
        extensions=['jinja2.ext.i18n'],
        filters={'datetime': datetimeformat},
    )
    # Required to add the default gettext and ngettext functions for rendering
    env.install_null_translations()

    # Set static folder location
    # TODO: Only turn on in dev environment
    app["static_root_url"] = "/"
    app.router.add_static("/", app["STATIC_ROOT"], show_index=True)

    app.on_startup.append(on_startup)
    app.on_cleanup.append(on_cleanup)

    return app
