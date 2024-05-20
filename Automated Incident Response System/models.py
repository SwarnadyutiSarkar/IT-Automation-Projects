from django.db import models

class Incident(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    severity = models.CharField(max_length=50)  # e.g., Low, Medium, High
    status = models.CharField(max_length=50, default='Open')  # e.g., Open, In Progress, Closed
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
