# Generated by Django 2.1.7 on 2021-05-24 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehicles', '0013_auto_20210524_1655'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='id',
            field=models.UUIDField(default='id', editable=False, primary_key=True, serialize=False),
        ),
    ]
