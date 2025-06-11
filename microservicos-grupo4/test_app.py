import subprocess
import time
import requests

BASE_URL = "http://127.0.0.1:5000"

def start_server():
    return subprocess.Popen(["python", "app.py"])

def wait_for_server():
    for _ in range(10):
        try:
            res = requests.get(f"{BASE_URL}/cart/hasItem?productId=1")
            if res.status_code == 200:
                return
        except:
            time.sleep(1)

def test_cart_operations():
    # Inicia o servidor Flask
    server = start_server()
    try:
        wait_for_server()

        # Teste: produto não está no carrinho
        res = requests.get(f"{BASE_URL}/cart/hasItem?productId=1")
        assert res.json() == {"inCart": False}

        # Teste: adiciona item
        res = requests.post(f"{BASE_URL}/cart/addItem", json={"productId": "1"})
        assert res.status_code == 201
        assert res.json()["success"] is True

        # Teste: item está no carrinho
        res = requests.get(f"{BASE_URL}/cart/hasItem?productId=1")
        assert res.json() == {"inCart": True}

        # Teste: remove item
        res = requests.delete(f"{BASE_URL}/cart/removeItem", json={"productId": "1"})
        assert res.status_code == 200
        assert res.json()["success"] is True

        # Teste: item não está mais no carrinho
        res = requests.get(f"{BASE_URL}/cart/hasItem?productId=1")
        assert res.json() == {"inCart": False}

    finally:
        server.terminate()