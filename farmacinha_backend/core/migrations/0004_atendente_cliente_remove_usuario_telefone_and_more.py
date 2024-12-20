# Generated by Django 5.1.3 on 2024-11-29 15:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_usuario_cnpj_alter_usuario_cpf'),
    ]

    operations = [
        migrations.CreateModel(
            name='Atendente',
            fields=[
                ('usuario_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.usuario')),
            ],
            options={
                'verbose_name': 'Atendente',
                'verbose_name_plural': 'Atendentes',
            },
            bases=('core.usuario',),
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('usuario_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.usuario')),
            ],
            options={
                'verbose_name': 'Cliente',
                'verbose_name_plural': 'Clientes',
            },
            bases=('core.usuario',),
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='telefone',
        ),
        migrations.AddField(
            model_name='usuario',
            name='senha',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='usuario',
            name='email',
            field=models.EmailField(default='', max_length=255, unique=True),
            preserve_default=False,
        ),
    ]
