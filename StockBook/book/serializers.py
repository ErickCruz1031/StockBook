from rest_framework import serializers
from book.models import Stock

#Stock/Notes Serializer
class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fiellds = '__all__'

