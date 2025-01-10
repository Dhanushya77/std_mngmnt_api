from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.TextField()
    roll_no = models.IntegerField()
    email = models.EmailField()
    course = models.TextField()
