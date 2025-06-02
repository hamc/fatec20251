# API de Validação de Autenticação - Next.js

Este projeto contém uma API Route do Next.js para validação de credenciais de usuário com token de autenticação.

## 📋 Descrição

A rota `/api/auth/validate` é responsável por validar credenciais de usuário (email, senha e token) e retornar o status de autenticação.

## 🚀 Tecnologias Utilizadas

- **Next.js 13+** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Next.js API Routes** - Para criação da API

## 📁 Estrutura do Projeto

```
app/
├── api/
│   └── auth/
│       └── validate/
│           └── route.ts
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o projeto:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

## 📖 Uso da API

### Endpoint

```
POST /api/auth/validate
```

### Corpo da Requisição

```json
{
  "email": "usuario@exemplo.com",
  "password": "minhasenha123",
  "token": "abcdef"
}
```

### Parâmetros Obrigatórios

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `email` | string | Email do usuário (deve ser válido) |
| `password` | string | Senha do usuário (mínimo 6 caracteres) |
| `token` | string | Token de validação |

### Tokens Válidos

Os seguintes tokens são aceitos pela API:
- `abcdef`
- `123456`
- `tokenValido123`

### Respostas

#### Sucesso (200)
```json
{
  "authenticated": true
}
```

#### Erro de Validação (400)
```json
{
  "error": "Email, senha e token são obrigatórios."
}
```

```json
{
  "error": "Email inválido."
}
```

```json
{
  "error": "A senha deve ter pelo menos 6 caracteres."
}
```

#### Token Inválido (401)
```json
{
  "authenticated": false,
  "error": "Token inválido."
}
```

## 🧪 Exemplo de Uso

### JavaScript/Fetch

```javascript
const response = await fetch('/api/auth/validate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'usuario@exemplo.com',
    password: 'minhasenha123',
    token: 'abcdef'
  })
});

const data = await response.json();

if (data.authenticated) {
  console.log('Usuário autenticado com sucesso!');
} else {
  console.log('Erro:', data.error);
}
```

### cURL

```bash
curl -X POST http://localhost:3000/api/auth/validate \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@exemplo.com",
    "password": "minhasenha123",
    "token": "abcdef"
  }'
```

## ⚠️ Considerações de Segurança

> **Importante**: Este é um exemplo básico para fins de demonstração. Em um ambiente de produção, considere:

- Usar um sistema de autenticação mais robusto (JWT, OAuth, etc.)
- Armazenar tokens de forma segura (banco de dados, variáveis de ambiente)
- Implementar rate limiting
- Adicionar logs de auditoria
- Usar HTTPS em produção
- Hash das senhas no banco de dados

## 🔒 Validações Implementadas

1. **Campos obrigatórios**: Verifica se email, senha e token estão presentes
2. **Formato do email**: Valida usando regex básica
3. **Tamanho da senha**: Mínimo de 6 caracteres
4. **Token válido**: Verifica se o token está na lista de tokens aceitos

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no GitHub ou entre em contato através do email: seuemail@exemplo.com
