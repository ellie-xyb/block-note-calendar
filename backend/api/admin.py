from django.contrib import admin
from .models import Task, Cell, User


@admin.register(User)
class UserModel(admin.ModelAdmin):
    list_display = ('id', 'username', 'password')


@admin.register(Task)
class TaskModel(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'user')


@admin.register(Cell)
class CellModel(admin.ModelAdmin):
    list_display = ('id', 'start_datetime', 'end_datetime', 'task')
