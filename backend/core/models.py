from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


# ClienteManager para gerenciar criação de usuários e superusuários
class ClienteManager(BaseUserManager):
    def create_user(self, cpf, nome, senha=None, **extra_fields):
        """
        Cria e retorna um cliente com CPF, nome e senha.
        """
        if not cpf:
            raise ValueError('O CPF é obrigatório.')
        if not nome:
            raise ValueError('O nome é obrigatório.')
        extra_fields.setdefault('is_active', True)

        cliente = self.model(cpf=cpf, nome=nome, **extra_fields)
        if senha:
            cliente.set_password(senha)  # Criptografa a senha
        cliente.save(using=self._db)
        return cliente

    def create_superuser(self, cpf, nome, senha=None, **extra_fields):
        """
        Cria e retorna um superusuário com permissões administrativas.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superusuário deve ter is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superusuário deve ter is_superuser=True.')

        return self.create_user(cpf, nome, senha, **extra_fields)


# Modelo Cliente
class Cliente(AbstractBaseUser, PermissionsMixin):
    id = models.BigAutoField(primary_key=True)  # Campo ID automático
    cpf = models.CharField(max_length=11, unique=True)
    nome = models.CharField(max_length=50)
    telefone = models.CharField(max_length=11, blank=True, null=True)
    email = models.EmailField(unique=True, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = ClienteManager()

    USERNAME_FIELD = 'cpf'
    REQUIRED_FIELDS = ['nome']

    def __str__(self):
        return self.nome


# Modelo Atendente
class AtendenteManager(BaseUserManager):
    def create_user(self, email, nome, cnpj, senha=None, **extra_fields):
        if not email:
            raise ValueError("O email é obrigatório.")
        if not cnpj:
            raise ValueError("O CNPJ é obrigatório.")

        email = self.normalize_email(email)
        atendente = self.model(email=email, nome=nome, cnpj=cnpj, **extra_fields)
        atendente.set_password(senha)  # Criptografa a senha
        atendente.save(using=self._db)
        return atendente

    def create_superuser(self, email, nome, cnpj, senha=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, nome, cnpj, senha, **extra_fields)

class Atendente(AbstractBaseUser):
    email = models.EmailField(unique=True)
    nome = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=14, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = AtendenteManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nome', 'cnpj']

    def __str__(self):
        return self.nome
    
# Modelo Medicamento
class Medicamento(models.Model):
    id = models.BigAutoField(primary_key=True)  # Campo ID automático
    nome = models.CharField(max_length=100)
    principio_ativo = models.CharField(max_length=100)
    dosagem = models.CharField(max_length=50)
    tipo = models.CharField(max_length=50)
    fabricante = models.CharField(max_length=50)

    def __str__(self):
        return self.nome


# Modelo Legislação
class Legislacao(models.Model):
    id = models.BigAutoField(primary_key=True)  # Campo ID automático
    titulo = models.CharField(max_length=100)
    requisitos = models.TextField()
    validade_receituario = models.IntegerField()  # Validade do receituário (em dias)
    intercambialidade = models.BooleanField()  # Permite troca de medicamento

    def __str__(self):
        return self.titulo
