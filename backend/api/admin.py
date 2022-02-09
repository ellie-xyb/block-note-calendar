from django.contrib import admin
from .models import Task, Cell


@admin.register(Task)
class TaskModel(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'user')


@admin.register(Cell)
class CellModel(admin.ModelAdmin):
    list_display = ('id', 'start_datetime', 'end_datetime', 'task')
