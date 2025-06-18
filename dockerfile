# Usa uma imagem base do Node.js
FROM node:18

# Cria o diretório da aplicação
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta usada pelo app (altere conforme seu código)
EXPOSE 3000

# Comando para iniciar o serviço
CMD ["npm", "start"]
