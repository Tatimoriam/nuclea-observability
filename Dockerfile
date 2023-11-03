# A aplicação é em React, logo puxaremos uma imagem nodejs
FROM node

# Adicionando algumas labels para identificar a imagem
LABEL description "Dockerfile para criar o exporter para o Prometheus"

# Adicionando o app-lista para a nossa imagem
ADD https://github.com/Tatimoriam/nuclea-observability/app-lista .

# Instalando as bibliotecas necessárias
RUN npm install

# Executando a aplicação
CMD npm start