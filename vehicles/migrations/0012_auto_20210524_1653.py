# Generated by Django 2.1.7 on 2021-05-24 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehicles', '0011_auto_20210524_1650'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='id',
            field=models.UUIDField(default='year', editable=False, primary_key=True, serialize=False),
        ),
    ]
