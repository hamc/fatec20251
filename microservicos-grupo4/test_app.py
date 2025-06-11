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
    server = start_server()
    try:
        wait_for_server()

        print("Verificando item fora do carrinho...")
        res = requests.get(f"{BASE_URL}/cart/hasItem?productId=1")
        assert res.json() == {"inCart": False}

        print("Adicionando item...")
        res = requests.post(f"{BASE_URL}/cart/addItem", json={"productId": "1"})
        assert res.status_code == 201

        print("Item está no carrinho...")
        res = requests.get(f"{BASE_URL}/cart/hasItem?productId=1")
        assert res.json() == {"inCart": True}

        print("Removendo item...")
        res = requests.delete(f"{BASE_URL}/cart/removeItem", json={"productId": "1"})
        assert res.status_code == 200

        print("Verificação final...")
        res = requests.get(f"{BASE_URL}/cart/hasItem?productId=1")
        assert res.json() == {"inCart": False}

    finally:
        server.terminate()