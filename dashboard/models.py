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

class job_profiles(models.Model):
     companey_name = models.CharField(max_length=100,null=False,  default= "", verbose_name = "Job_industries")
     job_Title= models.CharField(max_length=100,null=False, default= "")
     job_type= models.CharField(max_length=1000,null=False, default= "")
     updated_by_user =  models.ForeignKey(User, on_delete=models.PROTECT,verbose_name="Temp Updated By")
     job_Category=models.CharField(max_length=1000,null=False, default= "")
     job_skill=models.CharField(max_length=1000,null=True)
     gender=models.CharField(max_length=10,null=True)
     job_exp_date=models.DateField(null=True)
     salary_package=models.CharField(max_length=1000,null=True)
     status = models.BooleanField(default=True)
     country=models.CharField(max_length=100,null=True,default=None)
     state=models.CharField(max_length=100,null=True)
     city=models.CharField(max_length=100,null=True)
     career_level=models.CharField(null=True,max_length=100)
     degree_level=models.CharField(null=True,max_length=100)
     job_experience=models.CharField(null=True,max_length=100)
     description=models.CharField(null=True,max_length=10000)
     remote_work=models.CharField(null=True,max_length=100)
     created_on = models.DateTimeField(null=True, default=timezone.now)
     updated_on= models.DateTimeField(null=True, default=timezone.now)
