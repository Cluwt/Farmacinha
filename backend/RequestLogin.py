import requests

def login(cpf, password):
    url = "http://127.0.0.1:8000/api/login/cliente/"
    data = {
        "cpf": cpf,
        "senha": password
    }
    response = requests.post(url, json=data)
    
    if response.status_code == 200:
        tokens = response.json()
        print("Login bem-sucedido!")
        print("Access Token:", tokens['access'])
        print("Refresh Token:", tokens['refresh'])
        return tokens
    else:
        print("Erro ao fazer login:", response.status_code, response.json())

# Teste a função
login("52619603803", "calc")
