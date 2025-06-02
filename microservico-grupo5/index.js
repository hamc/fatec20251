const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const notificacoes = [
    { orderId: 1001, message: "Seu pedido foi confirmado.", sent: true }
];

app.post('/notification/send', (req, res) => {
    const { orderId, message } = req.body;
    if (!orderId || !message) {
        return res.status(400).json({ notificationSent: false, error: 'orderId e message são obrigatórios' });
    }
    const pedido = notificacoes.find(n => n.orderId === parseInt(orderId));
    if (!pedido) {
        notificacoes.push({ orderId: parseInt(orderId), message, sent: true });
        return res.json({ notificationSent: true });
    }
    pedido.sent = true;
    pedido.message = message;
    res.json({ notificationSent: true });
});

app.get('/notification/status', (req, res) => {
    const { orderId } = req.query;
    if (!orderId) {
        return res.status(400).json({ error: 'Parâmetro orderId é obrigatório' });
    }
    const pedido = notificacoes.find(n => n.orderId === parseInt(orderId));
    if (!pedido) {
        return res.status(404).json({ error: 'Notificação não encontrada' });
    }
    res.json({ notificationSent: pedido.sent });
});

app.listen(port, () => {
    console.log(`Serviço de Notificações rodando em http://localhost:${port}`);
});
