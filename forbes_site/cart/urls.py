from django.urls import path
from . import views


urlpatterns = [
    path('', views.cart_details, name='cart'),
    path('update_cart/', views.update_cart),
]
