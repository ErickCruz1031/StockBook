from django.shortcuts import render
from .models import Stock

def index(request):
    return render(request, 'book/index.html')
# Create your views here.
