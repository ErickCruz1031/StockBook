from django.db import models

class Stock(models.Model):
    ticker = models.CharField(max_length = 20, default = 'null')
    stock_note = models.CharField(max_length = 200, default = 'null')

    def __str__(self):
        return [self.ticker, self.stock_note]



# Create your models here.
