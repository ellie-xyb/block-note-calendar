# from django.contrib.auth.models import User
from ast import Delete
from .models import Task, Cell, User
from .serializers import UserSerializer, TaskSerializer, CellSerializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from datetime import datetime, timedelta
from django.http import Http404


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, SessionAuthentication,)
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    authentication_classes = (TokenAuthentication, SessionAuthentication)


class CellViewSet(viewsets.ModelViewSet):
    queryset = Cell.objects.all()
    serializer_class = CellSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)


class UserTasksList(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, SessionAuthentication,)

    def get(self, request):
        tasks = Task.objects.filter(user=request.user.pk)
        # another way to get the same query set
        # user = User.objects.get(id=user_id)
        # tasks = user.task_set.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request):
        request.data["user"] = request.user.pk
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserTaskDetail(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, SessionAuthentication,)

    def get_object(self, id):
        try:
            return Task.objects.get(id=id)
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, id):
        task = self.get_object(id)
        serializer = TaskSerializer(task)
        if task.user.id == request.user.pk:
            return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id):
        task = self.get_object(id)
        if task.user.id == request.user.pk:
            request.data["user"] = task.user.id
            serializer = TaskSerializer(task, data=request.data)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        task = self.get_object(id)
        if task.user.id == request.user.pk:
            task.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class WeekCellsList(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, SessionAuthentication)

    def get(self, request, year, month, day):
        request_day_str = f'{year}/{month}/{day}'
        request_day = datetime.strptime(request_day_str, "%Y/%m/%d")
        # weekday() will yield start and end of week (from Monday to Sunday), our calendar is from Sunday to Saturday
        gap = request_day.weekday() + 1 if request_day.weekday() < 6 else 0
        start_day = request_day - timedelta(days=gap)
        end_day = (start_day + timedelta(days=6)
                   ).replace(hour=23, minute=59, second=59)

        all_cells = Cell.objects.filter(task__user=request.user.pk)
        week_cells = all_cells.filter(
            start_datetime__gt=start_day,
            start_datetime__lte=end_day)
        serializer = CellSerializer(week_cells, many=True)
        return Response(serializer.data)
