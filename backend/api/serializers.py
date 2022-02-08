from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Task, Cell
from rest_framework.authtoken.views import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')

        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'content', 'user')


class CellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cell
        fields = ('id', 'start_datetime', 'end_datetime', 'task')
