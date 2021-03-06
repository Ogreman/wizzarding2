from collections import namedtuple

from . import handlers


Route = namedtuple("Route", ["method", "path", "handler", "name"])


ROUTES = [
    Route("GET",  "/", handler=handlers.get_index,  name="get_index"),
    Route("GET", "/info", handler=handlers.get_info, name="get_info"),
]


def setup(app, url_prefix=""):
    """Set up routes."""
    for route in ROUTES:
        method, url, handler, name = route
        full_url = f"/{url.lstrip('/')}"
        app.router.add_route(method, full_url, handler, name=name)
