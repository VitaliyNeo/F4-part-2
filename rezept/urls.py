from django.urls import path
from rezept import views

urlpatterns = [
    path('category/', views.CategoryList.as_view()),
    path('recipe/', views.RezeptList.as_view()),
    path('category/<int:category_pk>/', views.RezeptForCategory.as_view()),
    path('recipe/<int:recipe_pk>/', views.GetRezept.as_view()),
    path('category/create/', views.CategoryCreate.as_view()),
    path('recipe/create/', views.RezeptCreate.as_view()),
]
