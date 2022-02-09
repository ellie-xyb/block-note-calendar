from django.contrib.auth.models import User
from .models import Task, Cell
from .serializers import UserSerializer, TaskSerializer, CellSerializer
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    # permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)


class CellViewSet(viewsets.ModelViewSet):
    queryset = Cell.objects.all()
    serializer_class = CellSerializer
    # permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)


class UserTasksList(APIView):
    # permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def get(self, request, user_id):
        tasks = Task.objects.filter(user=user_id)
        # another way to get the same query set
        # user = User.objects.get(id=user_id)
        # tasks = user.task_set.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request, user_id):
        request.data["user"] = user_id
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class WeekCellsList(APIView):
    # permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def get(self, request, user_id, year, month, day):
        pass
