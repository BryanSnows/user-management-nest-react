# User Management Project - NestJS & ReactJS

Este projeto é uma aplicação de gerenciamento de usuários construída com NestJS para o backend e ReactJS para o frontend. O projeto utiliza Docker Compose ou o comando `yarn start` para executar o backend local e o comando `yarn start` para iniciar o frontend.

## Backend (NestJS)

Para executar o backend, você precisará executar o comando `yarn` para instalar as dependencias e rodar de forma local ou ter o Docker e o Docker Compose instalados em seu sistema. 

Depois de instalar o Docker e o Docker Compose, navegue até a pasta do projeto no terminal e execute o seguinte comando: `docker-compose up`


Isso irá construir e iniciar os contêineres do Docker definidos no arquivo `docker-compose.yml`.

O Swagger UI para a API do backend pode ser acessado através do seguinte link: [http://localhost:3002/swagger/#/](http://localhost:3002/swagger/#/)

## Frontend (ReactJS)

Para iniciar o frontend, primeiro você precisará instalar as dependências do projeto. Navegue até a pasta do frontend no terminal e execute o seguinte comando: `yarn install`


Depois de instalar as dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando: `yarn start`

Agora você deve ser capaz de acessar a aplicação no navegador em [http://localhost:3000](http://localhost:3000).

## Login de Admin

O login de administrador é:

- Email: bryan@email.com
- Senha: 36638947

## Banco de Dados (PostgreSQL)

Este projeto utiliza PostgreSQL como banco de dados. O esquema SQL do banco de dados está localizado na pasta `src/config/database` do projeto backend, no arquivo `schema.sql`.
