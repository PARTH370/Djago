from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from PIL import Image
# from informationmaster.models import Client

# Model Creates a table in database.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='profile_pics/default.jpg', upload_to='profile_pics')
    created_date = models.DateTimeField(blank=True, editable=False)
    updated_date = models.DateTimeField(blank=True)
    is_active = models.BooleanField(default=True)    
    # client = models.ForeignKey(Client, on_delete=models.PROTECT, null = True, blank = True, verbose_name = "Client") 
    def __str__(self):
        return f'{self.user.username} profile'

    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created_date = timezone.now()
        self.updated_date = timezone.now()
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
