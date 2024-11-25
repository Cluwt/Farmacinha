import requests

# URL para criar um novo cliente/usuário
url = "http://127.0.0.1:8000/api/register/"

# Dados do novo cliente
novo_cliente = {
    "cpf": "12345678901",
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "senha": "senha123"
}

# Token de acesso (opcional, caso necessário)
access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyNDg5NDM3LCJpYXQiOjE3MzI0ODY3MzcsImp0aSI6IjU0OTVjYWE5MzViZTQ4MTI5NGZhMzRkM2Y4MTI5ZGVjIiwidXNlcl9pZCI6MX0.kKbm2HhXTiaiEeouaVbL-EGX_jlNE2OAgaSIogEMmJU"

# Cabeçalhos com autenticação
headers = {
    "Authorization": f"Bearer {access_token}",
    "Content-Type": "application/json"
}

# Fazendo a requisição POST
response = requests.post(url, json=novo_cliente, headers=headers)

if response.status_code == 201:
    print("Cliente registrado com sucesso!")
    print(response.json())
else:
    print(f"Erro ao registrar cliente: {response.status_code}")
    print(response.text)
