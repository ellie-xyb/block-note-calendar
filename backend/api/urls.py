from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import UserViewSet, TaskViewSet, CellViewSet

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('tasks', TaskViewSet, basename='tasks')
router.register('cells', CellViewSet, basename='cells')


urlpatterns = [
    path('api/', include(router.urls)),
]
