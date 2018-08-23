from functools import partial

from envparse import Env, ConfigurationError


class Config(dict):

    def from_object(self, obj):
        for key in dir(obj):
            if key.isupper():
                config = getattr(obj, key)
                if config is None:
                    raise ConfigurationError(f'{key} not set')
                self[key] = config

    def __getattr__(self, name):
        try:
            return self[name]
        except KeyError:
            raise AttributeError('"{}" not found'.format(name))

    def __setattr__(self, name, value):
        self[name] = value


class BaseConfig:
    env = Env()
    env = partial(env, default=None)

    HOST = env("HOST")
    PORT = env("PORT")
    LOG_LEVEL = env("LOG_LEVEL")
    STATIC_ROOT = "app/static"

    FB_ACCESS_TOKEN = env("FB_ACCESS_TOKEN")


class ProductionConfig(BaseConfig):
    pass


class DevelopmentConfig:
    env = Env()
    HOST = env.str("HOST", default="0.0.0.0")
    PORT = env.int("PORT", default="7777")
    LOG_LEVEL = env("LOG_LEVEL", default="INFO")
    FB_ACCESS_TOKEN = env("FB_ACCESS_TOKEN", default="")
    STATIC_ROOT = "app/static"


class TestingConfig:
    HOST = "0.0.0.0"
    PORT = "7777"
    LOG_LEVEL = "INFO"
    FB_ACCESS_TOKEN = ""
    STATIC_ROOT = "app/static"
