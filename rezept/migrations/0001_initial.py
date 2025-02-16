# Generated by Django 4.2.2 on 2025-02-13 10:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, unique=True, verbose_name='Категория блюда')),
            ],
        ),
        migrations.CreateModel(
            name='Rezept',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dish', models.CharField(max_length=255, verbose_name='Название блюда')),
                ('recipe', models.TextField(verbose_name='Рецепт')),
                ('photo', models.ImageField(upload_to='user_recipe')),
                ('category', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='recipe', to='rezept.category', verbose_name='Категория блюда')),
            ],
        ),
    ]
