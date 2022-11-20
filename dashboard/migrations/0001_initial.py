# Generated by Django 3.2.16 on 2022-11-17 06:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300, null=True)),
                ('slug', models.CharField(max_length=300, null=True)),
                ('updated_on', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('content', models.TextField(null=True)),
                ('created_on', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('status', models.BooleanField(default=False)),
                ('blog_image', models.CharField(max_length=1000, null=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Temp Updated By')),
            ],
        ),
        migrations.CreateModel(
            name='job_profiles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('companey_name', models.CharField(default='', max_length=100, verbose_name='Job_industries')),
                ('job_Title', models.CharField(default='', max_length=100)),
                ('job_type', models.CharField(default='', max_length=1000)),
                ('job_Category', models.CharField(default='', max_length=1000)),
                ('job_skill', models.CharField(max_length=1000, null=True)),
                ('gender', models.CharField(max_length=10, null=True)),
                ('job_exp_date', models.DateField(null=True)),
                ('salary_package', models.CharField(max_length=1000, null=True)),
                ('status', models.BooleanField(default=True)),
                ('country', models.CharField(default=None, max_length=100, null=True)),
                ('state', models.CharField(max_length=100, null=True)),
                ('city', models.CharField(max_length=100, null=True)),
                ('career_level', models.CharField(max_length=100, null=True)),
                ('degree_level', models.CharField(max_length=100, null=True)),
                ('job_experience', models.CharField(max_length=100, null=True)),
                ('description', models.TextField()),
                ('remote_work', models.CharField(max_length=100, null=True)),
                ('job_url', models.CharField(max_length=1000, null=True)),
                ('email', models.CharField(max_length=100, null=True)),
                ('mobile_no', models.CharField(max_length=10, null=True)),
                ('created_on', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('updated_on', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('updated_by_user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Temp Updated By')),
            ],
        ),
        migrations.CreateModel(
            name='Job_industries',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True, unique=True, verbose_name='Job_industries_name')),
                ('status', models.BooleanField(default=True)),
                ('created_on', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('updated_on', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('updated_by_user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Temp Updated By')),
            ],
            options={
                'ordering': ['created_on'],
            },
        ),
    ]
