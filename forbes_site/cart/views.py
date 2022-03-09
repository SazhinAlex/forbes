from django.shortcuts import render, get_object_or_404
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from main.models import Product
from .cart import Cart
import json


def cart_details(request):
    context = {
        'cart': Cart(request)
    }
    return render(request, 'cart/cart.html', context)


@require_POST
def update_cart(request):
    cart = Cart(request)
    data = json.loads(request.body)
    product = get_object_or_404(Product, id=data['product_id'])
    cart.update(product=product, action=data['action'])
    return JsonResponse({'result': 'ok'})
