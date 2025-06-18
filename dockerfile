FROM node:18

WORKDIR /app

# Copia apenas a subpasta onde está o package.json
COPY backend/ .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
