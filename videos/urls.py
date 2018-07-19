from django.urls import path

from .views import VideoSearchListAPIView

urlpatterns = [
    path('', VideoSearchListAPIView.as_view()),
]
