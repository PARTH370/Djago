from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.utils import timezone

from PIL import Image
class Job_industries(models.Model):

    name = models.CharField(max_length=100, null=True,
                            unique=True, verbose_name="Job_industries_name")
    status = models.BooleanField(default=True)
    updated_by_user = models.ForeignKey(
        User, on_delete=models.PROTECT, verbose_name="Temp Updated By")
    created_on = models.DateTimeField(null=True, default=timezone.now)
    updated_on = models.DateTimeField(null=True, default=timezone.now)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['created_on']

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
     description=models.TextField()
     remote_work=models.CharField(null=True,max_length=100)
     job_url=models.CharField(null=True,max_length=1000)
     email=models.CharField(null=True,max_length=100)
     mobile_no=models.CharField(null=True,max_length=10)
     created_on = models.DateTimeField(null=True, default=timezone.now)
     updated_on= models.DateTimeField(null=True, default=timezone.now)




class Posts(models.Model):
    title = models.CharField(max_length=300, null=True)
    slug = models.CharField(max_length=300,null=True)
    author = models.ForeignKey(User, on_delete=models.PROTECT,verbose_name="Temp Updated By")
    updated_on = models.DateTimeField(default=timezone.now,null=True)
    content = models.TextField(null=True)
    created_on = models.DateTimeField(default=timezone.now,null=True)
    status = models.BooleanField( default=False)
    blog_image=models.ImageField(upload_to="profile_pics", default='profile_pics/default.jpg')

    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        
        super().save(*args, **kwargs)

        img = Image.open(self.blog_image.path)

        if img.height > 10 or img.width > 10:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.blog_image.path)