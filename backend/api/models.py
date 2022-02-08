from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}'


class Cell(models.Model):
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
