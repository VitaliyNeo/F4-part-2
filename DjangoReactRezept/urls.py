from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from rezept import views
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('rezept.urls')),
    path('openapi/', get_schema_view(
        title="Rezept Project",
        version='1.0.0',
        description="API for React App"
    ), name='openapi-schema'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
