from django.contrib import admin
from .models import Task

# admin.site.register(Task)


@admin.register(Task)
class TaskModel(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'user')
