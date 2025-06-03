from flask import Flask, request, jsonify

app = Flask(__name__)

# Simulando o carrinho com um conjunto (não permite itens duplicados)
cart = set()

@app.route('/cart/hasItem', methods=['GET'])
def has_item():
    product_id = request.args.get('productId')
    in_cart = product_id in cart
    return jsonify({"inCart": in_cart})

@app.route('/cart/addItem', methods=['POST'])
def add_item():
    data = request.get_json()
    product_id = str(data.get('productId'))

    if not product_id:
        return jsonify({
            "message": "Product ID is required.",
            "success": False
        }), 400

    cart.add(product_id)
    return jsonify({
        "message": f"Product {product_id} added to cart.",
        "success": True
    }), 201

@app.route('/cart/removeItem', methods=['DELETE'])
def remove_item():
    data = request.get_json()
    product_id = str(data.get('productId'))

    if not product_id:
        return jsonify({
            "message": "Product ID is required.",
            "success": False
        }), 400

    if product_id in cart:
        cart.remove(product_id)
        return jsonify({
            "message": f"Product {product_id} removed from cart.",
            "success": True
        }), 200
    else:
        return jsonify({
            "message": f"Product {product_id} not found in cart.",
            "success": False
        }), 404

if __name__ == '__main__':
    app.run(debug=True)
