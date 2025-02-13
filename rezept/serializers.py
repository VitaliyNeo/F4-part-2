from rest_framework import serializers
from .models import Category, Rezept


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('pk', 'name')


class RezeptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rezept
        fields = ('pk', 'dish', 'recipe', 'category', 'photo')
