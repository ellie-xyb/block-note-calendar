from django.db import router
from rest_framework.routers import DefaultRouter
from django.urls import URLPattern, path, include
from .views import TaskViewSet, UserViewSet

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('tasks', TaskViewSet, basename='tasks')

urlpatterns = [
    path('api/', include(router.urls)),
]
