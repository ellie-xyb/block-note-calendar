from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['title', 'user']

    def __str__(self):
        return f'{self.title} by user: {self.user.username}'


class Cell(models.Model):
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    task = models.ForeignKey(Task, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['task', 'start_datetime']
