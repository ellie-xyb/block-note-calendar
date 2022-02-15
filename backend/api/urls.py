from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import UserViewSet, TaskViewSet, CellViewSet, UserTasksList, WeekCellsList, UserTaskDetail, auth_signin, auth_signout

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('tasks', TaskViewSet, basename='tasks')
router.register('cells', CellViewSet, basename='cells')


urlpatterns = [
    path('api/', include(router.urls)),
    path('api/user/tasks/', UserTasksList.as_view()),
    path('api/user/tasks/<int:id>/', UserTaskDetail.as_view()),
    path('api/user/<int:year>/<int:month>/<int:day>/', WeekCellsList.as_view()),
    path('auth/signin', auth_signin),
    path('auth/signout', auth_signout),
    # path('auth/refresh', AuthRefresh.as_view()),
]
