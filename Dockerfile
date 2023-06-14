# Define a imagem base
FROM node:14.17.3-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package.json .
COPY package-lock.json .

# Instala as dependências do projeto
RUN npm install

# Copia o código-fonte do projeto
COPY . .

RUN npm run build

# Define o comando para executar o projeto
CMD ["npm", "start"]
