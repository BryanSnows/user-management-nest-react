# Use a imagem Node.js
FROM node:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos necessários
COPY ./backend/package*.json ./

# Instala as dependências
RUN npm install

# Copia o código da aplicação
COPY ./backend .

# Expõe a porta em que a aplicação NestJS está escutando
EXPOSE 3002

# Comando para iniciar a aplicação
CMD ["npm", "start"]