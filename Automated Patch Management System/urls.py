from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from patches.views import PatchViewSet

router = DefaultRouter()
router.register(r'patches', PatchViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
