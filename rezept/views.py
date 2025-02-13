from .models import Category, Rezept
from .serializers import CategorySerializer, RezeptSerializer
from rest_framework import generics
from rest_framework.schemas.openapi import AutoSchema
from django.shortcuts import render


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    description = 'Get categories list.'


class RezeptList(generics.ListAPIView):
    queryset = Rezept.objects.all()
    serializer_class = RezeptSerializer
    description = 'Get recipes list.'


class RezeptForCategory(generics.ListAPIView):
    serializer_class = RezeptSerializer
    description = 'Get recipes list for a category by category id.'

    schema = AutoSchema(
        operation_id_base='RezeptForCategory',
    )

    def get_queryset(self):
        category_pk = self.kwargs['category_pk']

        return Rezept.objects.filter(category__pk=category_pk)


class GetRezept(generics.ListAPIView):
    serializer_class = RezeptSerializer
    description = 'Get a recipe by recipe id.'

    def get_queryset(self):
        recipe_pk = self.kwargs['recipe_pk']
        return Rezept.objects.filter(pk=recipe_pk)


class CategoryCreate(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    description = 'Create category.'


class RezeptCreate(generics.CreateAPIView):
    queryset = Rezept.objects.all()
    serializer_class = RezeptSerializer
    description = 'Create recipe.'

