from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),  # Acesso ao admin do Django
    path('api/', include('core.urls')),  # Inclui as rotas do app core
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Obter token JWT
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Atualizar token JWT
]
