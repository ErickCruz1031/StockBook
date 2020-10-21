from django.urls import path 
from . import views
from rest_framework import routers
from .api import StockViewset
from django.conf.urls import url

router = routers.DefaultRouter()
router.register('api/stocks', StockViewset, 'book')

app_name = 'book'

urlpatterns = router.urls
    #path('', views.index, name='index')
    #path('home/', views.index, name='index') #for /book/home


