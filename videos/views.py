from rest_framework.generics import ListCreateAPIView
from django.conf import settings
import requests
from rest_framework.response import Response


class VideoSearchListAPIView(ListCreateAPIView):
    def post(self, request, *args, **kwargs):
        _type = self.request.data.get('type', 'video')  # playlist,video, channel
        _q = self.request.data.get('q', 'hadise')
        _maxResults = self.request.data.get('maxResults', 5)
        _part = self.request.data.get('part', 'snippet')
        _key = settings.YOUTUBE_API_KEY

        search_url = "/search?type={}&q={}&maxResults={}&part={}&key={}".format(
            _type,
            _q,
            _maxResults,
            _part,
            _key,
        )

        url = settings.YOUTUBE_BASE_API + search_url
        req = requests.get(url)  # may use proxy, look settings.PROXIES
        return Response(req.json())
