# Generated by Django 3.2.16 on 2022-11-15 12:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('dashboard', '0004_job_industriesd'),
    ]

    operations = [
        migrations.CreateModel(
            name='job_profiles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('companey_name', models.CharField(max_length=100, null=True, verbose_name='Job_industries')),
                ('job_Title', models.CharField(max_length=100, null=True)),
                ('job_type', models.CharField(max_length=1000, null=True)),
                ('job_Category', models.CharField(max_length=1000, null=True)),
                ('job_skill', models.CharField(max_length=1000, null=True)),
                ('gender', models.CharField(max_length=10, null=True)),
                ('job_exp_date', models.DateField(null=True)),
                ('salary_package', models.CharField(max_length=1000, null=True)),
                ('status', models.BooleanField(default=True)),
                ('country', models.CharField(max_length=100, null=True)),
                ('state', models.CharField(max_length=100, null=True)),
                ('city', models.CharField(max_length=100, null=True)),
                ('career_level', models.CharField(max_length=100, null=True)),
                ('degree_level', models.CharField(max_length=100, null=True)),
                ('job_experience', models.CharField(max_length=100, null=True)),
                ('description', models.CharField(max_length=10000, null=True)),
                ('remote_work', models.CharField(max_length=100, null=True)),
                ('created_on', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('updated_on', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('updated_by_user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Temp Updated By')),
            ],
        ),
        migrations.DeleteModel(
            name='DailyNav',
        ),
        migrations.DeleteModel(
            name='Job_industriesd',
        ),
    ]
