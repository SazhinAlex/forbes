from django.urls import path
from . import views


urlpatterns = [
    path('', views.cart_details, name='cart'),
    path('add/', views.cart_add, name='cart_add'),
]
