from django.shortcuts import render
from .models import Stock, Note

def index(request):
    return render(request, 'book/index.html')
# Create your views here.
