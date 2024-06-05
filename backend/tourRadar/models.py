from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    gender = models.CharField(max_length=10,default='')
    country = models.CharField(max_length=50,default='')
    type = models.CharField(max_length=10,default='tourist')
    phone = models.IntegerField()
    profilePic = models.ImageField(upload_to="Images/PP",default="")
    coverPic = models.ImageField(upload_to="Images/CP",default="")

    def __str__(self):
        return self.user.first_name+" "+self.user.last_name