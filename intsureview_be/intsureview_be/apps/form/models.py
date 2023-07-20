from django.db import models

class Form(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    willReceivePromotions = models.BooleanField()
    howDidYouHear = models.CharField(max_length=255)
    
    class Meta:
        app_label = 'form'

    def __str__(self):
        return self.firstname