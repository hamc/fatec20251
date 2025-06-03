# Microserviço - Carrinho de Compras

## Descrição
Microserviço responsável por gerenciar o carrinho de compras do usuário.

## Endpoints Disponíveis

### 1. Verificar se um item está no carrinho
- **URL:** `/cart/hasItem`
- **Método:** `GET`
- **Exemplo:** `/cart/hasItem?productId=101`
- **Resposta:** `{ "inCart": true }` ou `{ "inCart": false }`

### 2. Adicionar um item ao carrinho
- **URL:** `/cart/addItem`
- **Método:** `POST`
- **Corpo JSON:** `{ "productId": "101" }`
- **Resposta:** Mensagem de sucesso.

### 3. Remover um item do carrinho
- **URL:** `/cart/removeItem`
- **Método:** `DELETE`
- **Corpo JSON:** `{ "productId": "101" }`
- **Resposta:** Mensagem de sucesso ou erro se não encontrado.

## Execução Local

### Pré-requisitos
- Python instalado (versão 3.x)

### Passos

1. Abra o terminal (CMD, PowerShell ou Terminal do VS Code).
2. Navegue até a pasta do projeto:
   ```bash
   cd caminho\para\microservico-carrinho-de-compras