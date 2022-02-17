from django.shortcuts import render
from .models import Category, Product


def index(request):
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    data = {
        'categories': categories,
        'products': products,
    }
    return render(request, 'main/index.html', data)
