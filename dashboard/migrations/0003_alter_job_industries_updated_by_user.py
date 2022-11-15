# Generated by Django 3.2.16 on 2022-11-14 06:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('dashboard', '0002_job_industries'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job_industries',
            name='updated_by_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Temp Updated By'),
        ),
    ]
