from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password
from .models import Cliente, Atendente, Medicamento, Legislacao
from .serializers import ClienteSerializer, AtendenteSerializer, MedicamentoSerializer, LegislacaoSerializer
from rest_framework import status  # Importação do `status`


# Registro de Clientes
class ClienteRegistroView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ClienteSerializer(data=request.data)
        if serializer.is_valid():
            cliente = serializer.save()
            return Response({'id': cliente.id, 'cpf': cliente.cpf, 'nome': cliente.nome}, status=201)
        return Response(serializer.errors, status=400)


# Login de Clientes
class ClienteLoginView(APIView):
    permission_classes = []  # Permite acesso público

    def post(self, request):
        cpf = request.data.get('cpf')
        senha = request.data.get('senha')

        try:
            cliente = Cliente.objects.get(cpf=cpf)
        except Cliente.DoesNotExist:
            raise AuthenticationFailed('CPF ou senha inválidos.')

        # Verifica a senha usando check_password
        if not cliente.check_password(senha):
            raise AuthenticationFailed('CPF ou senha inválidos.')

        # Gera os tokens JWT
        refresh = RefreshToken.for_user(cliente)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })

# Registro de Atendentes
class AtendenteRegistroView(APIView):

    permission_classes = [AllowAny]  # Permite acesso público ao endpoint

    def post(self, request):
        serializer = AtendenteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login de Atendentes
class AtendenteLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        cnpj = request.data.get('cnpj')
        senha = request.data.get('senha')

        try:
            atendente = Atendente.objects.get(cnpj=cnpj)
        except Atendente.DoesNotExist:
            raise AuthenticationFailed('CNPJ ou senha inválidos.')

        if not check_password(senha, atendente.senha):
            raise AuthenticationFailed('CNPJ ou senha inválidos.')

        refresh = RefreshToken.for_user(atendente)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })


# CRUDs para Modelos
class ClienteViewSet(ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated]


class AtendenteViewSet(ModelViewSet):
    queryset = Atendente.objects.all()
    serializer_class = AtendenteSerializer
    permission_classes = [IsAuthenticated]


class MedicamentoViewSet(ModelViewSet):
    queryset = Medicamento.objects.all()
    serializer_class = MedicamentoSerializer
    permission_classes = [IsAuthenticated]


class LegislacaoViewSet(ModelViewSet):
    queryset = Legislacao.objects.all()
    serializer_class = LegislacaoSerializer
    permission_classes = [IsAuthenticated]
