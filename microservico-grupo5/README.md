# Alunos: Alan, Bruno Rocha, Juliano, Milena

# Serviço de Notificações

## Descrição
Microserviço simples para enviar notificações ao usuário, como confirmação de pedido, e consultar status.

## Endpoints

- POST /notification/send  
  Envia uma notificação.  
  Entrada JSON: `{ "orderId": 1001, "message": "Sua notificação" }`  
  Resposta JSON: `{ "notificationSent": true }` ou `{ "notificationSent": false }`

- GET /notification/status?orderId=1001  
  Consulta status da notificação.  
  Resposta JSON: `{ "notificationSent": true }` ou erro.

## Como executar localmente

1. Instalar dependências:  
   `npm install`

2. Rodar o servidor:  
   `node index.js`

3. O serviço estará disponível em:  
   `http://localhost:3000`
