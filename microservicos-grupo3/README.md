# Microserviço de Produtos

## Descrição

Esse microserviço fornece informações sobre a disponibilidade de produtos.

## Endpoints

### Verificar disponibilidade de produto

- **URL:** `/products/check`
- **Método:** GET
- **Parâmetros de entrada:** `productId`
- **Exemplo de Requisição:** (http://localhost:3000/products/check?productId=101)
- **Resposta:**
  - `{ "available": true }`
  - `{ "available": false }`

## Como executar localmente

1. Clone o repositório.
2. Entre na pasta `microservicos-grupo3`.
3. Instale as dependências:

   ```bash
   npm install
4. Execute o seguinte comando no terminal:

    ```bash
    npm start
