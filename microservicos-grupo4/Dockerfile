# Imagem oficial do Python
FROM python:3.10-slim

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos para dentro do container
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Expõe a porta padrão do Flask
EXPOSE 5000

# Comando para iniciar o app
CMD ["python", "app.py"]