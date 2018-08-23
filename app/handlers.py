import aiohttp_jinja2
from aiohttp.client_exceptions import ClientConnectionError, ClientConnectorError, ClientResponseError
from aiohttp.web import json_response

from . import VERSION


async def get_index(request):
    return aiohttp_jinja2.render_template("index.html", request, {'events': await get_wizzarding_events(request)})


async def get_info(_):
    return json_response({"name": 'wizzarding', "version": VERSION})


async def get_wizzarding_events(request):
    events_url = 'https://graph.facebook.com/v3.1/wizzarding/events'
    params = {
        'access_token': request.app["FB_ACCESS_TOKEN"],
        'fields': 'cover,description,start_time,place,name,ticket_uri',
        'limit': 3,
        'time_filter': 'upcoming',
    }
    try:
        async with request.app.http_session_pool.get(events_url, params=params) as resp:
            resp.raise_for_status()
            return (await resp.json())['data']
    except (ClientConnectionError, ClientConnectorError, ClientResponseError):
        return []
