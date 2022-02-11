from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import UserViewSet, TaskViewSet, CellViewSet, UserTasksList, WeekCellsList

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('tasks', TaskViewSet, basename='tasks')
router.register('cells', CellViewSet, basename='cells')


urlpatterns = [
    path('api/', include(router.urls)),
    path('api/users/<int:user_id>/tasks/', UserTasksList.as_view()),
    path('api/users/<int:user_id>/<int:year>/<int:month>/<int:day>/',
         WeekCellsList.as_view())
]
