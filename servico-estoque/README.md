# 📦 Estoque.io

**Estoque.io** é um microserviço de verificação e gerenciamento de estoque, desenvolvido para a disciplina de Tópicos Especiais em Sistemas para Internet da FATEC Jales.

## ✨ Funcionalidades

- Verificar estoque por ID
- Cadastrar produtos
- Editar produtos existentes
- Procurar produto por nome
- Listar todos os produtos
- Interface web leve e responsiva

## 🧑‍💻 Integrantes do grupo

- Gabriel Pedreiro
- Gabriel Schultz
- Otávio
- Heitor

## 🛠️ Tecnologias utilizadas

- Front-end: HTML5, CSS3, JavaScript puro
- Back-end: Node.js (API REST)
- Estilo: Minimalista, inspirado no design da Apple (SF Pro Display & Playfair Display)
- Armazenamento: Em memória (array)

## 🚀 Como executar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/hamc/fatec20251.git
cd fatec20251

2. Instale as dependências do servidor
bash
Copiar
Editar
cd backend
npm install
3. Inicie o servidor Node.js
bash
Copiar
Editar
node index.js
O servidor será iniciado em: http://localhost:3000

4. Abra o front-end
Abra o arquivo frontend/index.html diretamente no navegador.

Certifique-se de que o backend esteja em execução para que as funcionalidades funcionem corretamente.

🧪 Exemplos de uso
Verificar produto
Digite o ID do produto e clique em 🔍 Verificar.

Cadastrar produto
Informe nome e quantidade e clique em ➕ Cadastrar.

Editar produto
Digite o ID, novo nome e nova quantidade, depois clique em ✏️ Atualizar.

Procurar produto
Digite parte do nome e veja as sugestões clicáveis.

Listar todos
Clique em Listar Produtos e veja todos os produtos com status de estoque.

📁 Estrutura do projeto

pgsql
Copiar
Editar
fatec20251/
├── backend/
│   ├── index.js
│   └── (outros arquivos do Node.js)
├── frontend/
│   ├── index.html
│   └── (CSS e JS embutidos)
└── README.md
📋 Observações
Os dados são armazenados apenas em memória, ou seja, reiniciar o servidor apaga os dados.

Interface construída com design responsivo e tipografia nítida, compatível com dispositivos modernos.

Nenhum framework de front-end foi utilizado, visando aprendizado com HTML/CSS/JS puro.

Desenvolvido com 💻 pelos alunos da FATEC Jales – 2025.