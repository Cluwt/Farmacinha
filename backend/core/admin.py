from django.contrib import admin
from .models import Cliente, Atendente, Medicamento, Legislacao
from django.contrib.auth.admin import UserAdmin

# Configuração para exibição de Clientes no admin
class ClienteAdmin(UserAdmin):
    model = Cliente
    list_display = ('cpf', 'nome', 'email', 'is_active', 'is_staff')
    list_filter = ('is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('cpf', 'nome', 'email', 'telefone', 'password')}),
        ('Permissões', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('cpf', 'nome', 'email', 'telefone', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser')}
        ),
    )
    search_fields = ('cpf', 'nome', 'email')
    ordering = ('cpf',)

admin.site.register(Cliente, ClienteAdmin)

# Configuração para exibição de Atendentes no admin
class AtendenteAdmin(admin.ModelAdmin):
    list_display = ['nome', 'cnpj', 'email']
    readonly_fields = ['cnpj']

admin.site.register(Atendente, AtendenteAdmin)

# Configuração para exibição de Medicamentos no admin
@admin.register(Medicamento)
class MedicamentoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'principio_ativo', 'dosagem', 'tipo', 'fabricante')
    search_fields = ('nome', 'principio_ativo', 'fabricante')  # Campos de busca
    list_filter = ('tipo', 'fabricante')  # Filtros laterais por tipo e fabricante
    ordering = ('nome',)  # Ordenação por nome

# Configuração para exibição de Legislação no admin
@admin.register(Legislacao)
class LegislacaoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'validade_receituario', 'intercambialidade')  # Campos visíveis
    search_fields = ('titulo', 'requisitos')  # Campos para busca
    list_filter = ('validade_receituario', 'intercambialidade')  # Filtros laterais
    ordering = ('titulo',)  # Ordenação padrão por título
