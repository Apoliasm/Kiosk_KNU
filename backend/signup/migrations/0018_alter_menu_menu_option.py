# Generated by Django 4.2.5 on 2023-12-12 05:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0017_alter_menu_menu_option'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='menu_option',
            field=models.ManyToManyField(to='signup.option'),
        ),
    ]
