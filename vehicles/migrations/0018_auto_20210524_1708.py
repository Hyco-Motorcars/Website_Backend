# Generated by Django 2.1.7 on 2021-05-24 17:08

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('vehicles', '0017_auto_20210524_1707'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='id',
            field=models.CharField(default=uuid.uuid4, max_length=120, primary_key=True, serialize=False),
        ),
    ]