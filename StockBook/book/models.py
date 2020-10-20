from django.db import models

class Stock(models.Model):
    ticker = models.CharField(max_length = 20)

    def __str__(self):
        return self.ticker

class Note(models.Model):
    stock = models.ForeignKey(Stock, on_delete = models.CASCADE)
    stock_note = models.CharField(max_length = 200)

    def __str__(self):
        return self.stock_note


# Create your models here.
