from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.utils import timezone


class Job_industries(models.Model):

    name = models.CharField(max_length=100, null=True,
                            unique=True, verbose_name="Job_industries")
    status = models.BooleanField(default=True)
    updated_by_user = models.ForeignKey(
        User, on_delete=models.PROTECT, verbose_name="Temp Updated By")
    created_on = models.DateTimeField(null=True, default=timezone.now)
    updated_on = models.DateTimeField(null=True, default=timezone.now)

    def _str_(self):
        return f'{self.name}'

    class Meta:
        verbose_name_plural = "Job_industries"
