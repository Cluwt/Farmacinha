from rest_framework import serializers
from .models import Cliente, Atendente, Medicamento, Legislacao



class ClienteSerializer(serializers.ModelSerializer):
    senha = serializers.CharField(write_only=True)  # Campo de senha para entrada

    class Meta:
        model = Cliente
        fields = ['cpf', 'nome', 'email', 'senha']  # Adicione os campos relevantes

    def create(self, validated_data):
        senha = validated_data.pop('senha')  # Remova a senha do restante dos dados
        cliente = Cliente.objects.create(**validated_data)
        cliente.set_password(senha)  # Configure a senha corretamente
        cliente.save()
        return cliente

class AtendenteSerializer(serializers.ModelSerializer):
    senha = serializers.CharField(write_only=True)  # Campo de senha para entrada

    class Meta:
        model = Atendente
        fields = ['nome', 'cnpj', 'email', 'senha']  # Remova `cpf` e inclua `cnpj` para atendentes

    def create(self, validated_data):
        senha = validated_data.pop('senha')  # Remova a senha do restante dos dados
        atendente = Atendente.objects.create(**validated_data)
        atendente.set_password(senha)  # Configure a senha corretamente
        atendente.save()
        return atendente


class MedicamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicamento
        fields = '__all__'


class LegislacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Legislacao
        fields = '__all__'
