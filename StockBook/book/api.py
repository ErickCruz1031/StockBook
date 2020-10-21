from book.models import Stock
from rest_framework import viewsets, permissions
from .serializers import StockSerializer


#Stock Viewset
class StockViewset(viewsets.ModelViewSet):
    queryset = Stock.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]