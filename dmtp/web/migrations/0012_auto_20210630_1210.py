# Generated by Django 3.2.4 on 2021-06-30 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0011_alter_location_parent'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='short_name',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='location',
            name='name',
            field=models.TextField(),
        ),
    ]