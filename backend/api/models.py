from django.db import models
# from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.signals import user_logged_in
from django.dispatch.dispatcher import receiver

from sundial.fields import TimezoneField
from sundial.utils import set_session_timezone
from sundial.zones import COMMON_GROUPED_CHOICES


class User(AbstractUser):
    timezone = TimezoneField(
        default=settings.TIME_ZONE, choices=COMMON_GROUPED_CHOICES
    )


@receiver(user_logged_in)
def assign_user_timezone(request, user, **kwargs):
    set_session_timezone(request.session, user.timezone)


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
