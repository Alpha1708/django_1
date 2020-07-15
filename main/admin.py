from django.contrib import admin
from .models import Gallery
from .models import Ourteam
from .models import reviews
# Register your models here.
admin.site.register(Gallery)
admin.site.register(Ourteam)
admin.site.register(reviews)