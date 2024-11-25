import requests

# URL para buscar medicamentos
url = "http://127.0.0.1:8000/api/medicamento/"

# Token de acesso (obtido pelo RequestLogin.py)
access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyNDg5NDM3LCJpYXQiOjE3MzI0ODY3MzcsImp0aSI6IjU0OTVjYWE5MzViZTQ4MTI5NGZhMzRkM2Y4MTI5ZGVjIiwidXNlcl9pZCI6MX0.kKbm2HhXTiaiEeouaVbL-EGX_jlNE2OAgaSIogEMmJU"

# Cabeçalhos com autenticação
headers = {
    "Authorization": f"Bearer {access_token}"
}

# Fazendo a requisição GET
response = requests.get(url, headers=headers)

if response.status_code == 200:
    print("Medicamentos obtidos com sucesso:")
    print(response.json())
else:
    print(f"Erro ao obter medicamentos: {response.status_code}")
    print(response.text)
