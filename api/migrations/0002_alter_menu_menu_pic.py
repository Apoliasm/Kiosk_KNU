# Generated by Django 4.2.5 on 2023-09-17 01:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="menu",
            name="menu_pic",
            field=models.CharField(max_length=500),
        ),
    ]
