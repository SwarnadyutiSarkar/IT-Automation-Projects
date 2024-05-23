from rest_framework import viewsets
from .models import Patch
from .serializers import PatchSerializer

class PatchViewSet(viewsets.ModelViewSet):
    queryset = Patch.objects.all()
    serializer_class = PatchSerializer
