from app import app

client = app.test_client()

def test_add_item():
    response = client.post('/cart/addItem', json={"productId": "123"})
    assert response.status_code == 201
    assert response.get_json()["success"] == True

def test_has_item():
    client.post('/cart/addItem', json={"productId": "456"})
    response = client.get('/cart/hasItem?productId=456')
    assert response.status_code == 200
    assert response.get_json()["inCart"] == True

def test_remove_item():
    client.post('/cart/addItem', json={"productId": "789"})
    response = client.delete('/cart/removeItem', json={"productId": "789"})
    assert response.status_code == 200
    assert response.get_json()["success"] == True
