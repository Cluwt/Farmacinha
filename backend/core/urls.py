from django.urls import path
from .views import (
    ClienteRegistroView, ClienteLoginView, AtendenteRegistroView, AtendenteLoginView,
    ClienteViewSet, AtendenteViewSet, MedicamentoViewSet, LegislacaoViewSet
)

urlpatterns = [
    # Registro e login de clientes
    path('registro/cliente/', ClienteRegistroView.as_view(), name='cliente_registro'),
    path('login/cliente/', ClienteLoginView.as_view(), name='cliente_login'),

    # Registro e login de atendentes
    path('registro/atendente/', AtendenteRegistroView.as_view(), name='atendente_registro'),
    path('login/atendente/', AtendenteLoginView.as_view(), name='atendente_login'),

    # Listagem e detalhes de clientes
    path('clientes/', ClienteViewSet.as_view({'get': 'list', 'post': 'create'}), name='cliente-list'),
    path('clientes/<int:pk>/', ClienteViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='cliente-detail'),

    # Listagem e detalhes de atendentes
    path('atendentes/', AtendenteViewSet.as_view({'get': 'list', 'post': 'create'}), name='atendente-list'),
    path('atendentes/<int:pk>/', AtendenteViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='atendente-detail'),

    # Listagem e detalhes de medicamentos
    path('medicamentos/', MedicamentoViewSet.as_view({'get': 'list', 'post': 'create'}), name='medicamento-list'),
    path('medicamentos/<int:pk>/', MedicamentoViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='medicamento-detail'),

    # Listagem e detalhes de legislações
    path('legislacoes/', LegislacaoViewSet.as_view({'get': 'list', 'post': 'create'}), name='legislacao-list'),
    path('legislacoes/<int:pk>/', LegislacaoViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='legislacao-detail'),
]
