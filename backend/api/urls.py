# from rest_framework import routers
from django.db import router
from rest_framework.routers import DefaultRouter
from django.urls import URLPattern, path, include
from .views import TaskViewSet, UserViewSet

# router = routers.SimpleRouter()
# router.register(r'users', UserViewSet)
# router.register(r'/users/<int:id>/tasks', TaskViewSet)

# urlpatterns = router.urls


router = DefaultRouter()
router.register('users', UserViewSet, basename='users')

urlpatterns = [
    path('', include(router.urls)),
]
