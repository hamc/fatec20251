# Etapa 1: Build
FROM node:20 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Execução
FROM node:20
WORKDIR /app
COPY --from=builder /app .

EXPOSE 3000
CMD ["npm", "start"]
