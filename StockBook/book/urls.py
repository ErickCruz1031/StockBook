from django.urls import path 
from . import views

app_name = 'book'

urlpatterns = [
    path('', views.index, name='index')
    #path('home/', views.index, name='index') #for /book/home

]
