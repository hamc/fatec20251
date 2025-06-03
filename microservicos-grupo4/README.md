
#  Microserviço - Carrinho de Compras

##  Descrição

Este microserviço tem como objetivo gerenciar o carrinho de compras dos usuários.  
Permite verificar se um produto está no carrinho, além de adicionar e remover produtos.  

Este projeto foi desenvolvido como parte da atividade prática da disciplina na Fatec.

---

## Funcionalidades

- Verificar se um item está no carrinho (`/cart/hasItem`)
- Adicionar item no carrinho (`/cart/addItem`)
- Remover item do carrinho (`/cart/removeItem`)

---

##  Como Funciona (Explicação Simples)

- O serviço é executado localmente em um servidor Flask (Python).
- Os dados estão armazenados temporariamente em uma variável de memória (não usa banco de dados).
- Ao encerrar o programa, o carrinho é zerado.

---

##  Endpoints da API

### Verificar se um item está no carrinho

- **URL:** `/cart/hasItem`
- **Método:** `GET`
- **Parâmetros:**  
  `productId` → ID do produto a ser verificado  
- **Exemplo:**  
  ```
  http://127.0.0.1:5000/cart/hasItem?productId=101
  ```
- **Resposta:**  
  ```json
  { "inCart": true }
  ```
  ou  
  ```json
  { "inCart": false }
  ```

---

###  Adicionar um item ao carrinho

- **URL:** `/cart/addItem`
- **Método:** `POST`
- **Body (JSON):**  
  ```json
  { "productId": "101" }
  ```
- **Resposta:**  
  ```json
  { "message": "Item added to cart" }
  ```

---

### Remover um item do carrinho

- **URL:** `/cart/removeItem`
- **Método:** `POST`
- **Body (JSON):**  
  ```json
  { "productId": "101" }
  ```
- **Resposta:**  
  ```json
  { "message": "Item removed from cart" }
  ```

---

## Como Executar Localmente (Passo a Passo)

### 1️ **Pré-requisitos instalados:**
- Python instalado ([Download aqui](https://www.python.org/downloads/))
- Git instalado ([Download aqui](https://git-scm.com/downloads))
- Visual Studio Code instalado ([Download aqui](https://code.visualstudio.com/))

---

### 2️ **Baixar o projeto**

Abra o **CMD**, **PowerShell** ou o terminal do **VS Code** e execute:

```bash
git clone https://github.com/hamc/fatec20251.git
cd fatec20251
git checkout grupo-04/microservico-carrinho-de-compras
```

---

### 3️ **Criar ambiente virtual**

No terminal:

```bash
python -m venv venv
```

Ativar:

- No **CMD**:
  ```bash
  venv\Scripts\activate
  ```
- No **PowerShell**:
  ```bash
  .\venv\Scripts\Activate.ps1
  ```

---

### 4️ **Instalar dependências**

```bash
pip install flask
```

---

### 5️ **Rodar o serviço**

Execute:

```bash
python app.py
```

O terminal mostrará algo como:

```
 * Running on http://127.0.0.1:5000
```

---

##  **Testando o Microserviço**

### 🔹 **Testes via navegador (apenas GET)**

- Verificar item no carrinho (exemplo):  
  ```
  http://127.0.0.1:5000/cart/hasItem?productId=101
  ```

> **IMPORTANTE:**  
Para adicionar e remover itens (POST), é necessário usar ferramentas como:
- **Postman**
- **Insomnia**
- Ou extensões como **"REST Client"** no VS Code.

---

### **Testando com o Postman (exemplo):**

1. Abra o Postman.
2. Escolha o método **POST**.
3. Digite a URL:  
```
http://127.0.0.1:5000/cart/addItem
```
4. Vá em **Body → Raw → JSON** e insira:  
```json
{ "productId": "101" }
```
5. Clique em **Send**.

---

## Observação Importante

Este microserviço é uma simulação. Os dados ficam armazenados apenas enquanto o serviço está rodando. Ao encerrar, tudo se perde (não há banco de dados).

---

## Desenvolvido por:

- João Paulo
- João Victor
- Camille
- Emerson
- Marco Antonio
