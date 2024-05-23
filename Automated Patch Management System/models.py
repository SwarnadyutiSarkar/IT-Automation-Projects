from django.db import models

class Patch(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    version = models.CharField(max_length=50)
    release_date = models.DateField()
    tested = models.BooleanField(default=False)
    applied = models.BooleanField(default=False)
    applied_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name
