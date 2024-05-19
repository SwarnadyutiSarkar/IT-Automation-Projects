from django.db import models

class Asset(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    asset_type = models.CharField(max_length=50)  # e.g., Hardware, Software
    purchase_date = models.DateField()
    warranty_expiry = models.DateField()
    assigned_to = models.CharField(max_length=100, blank=True, null=True)
    location = models.CharField(max_length=100)
    status = models.CharField(max_length=50, default='Active')  # e.g., Active, Retired

    def __str__(self):
        return self.name
