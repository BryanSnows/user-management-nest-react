# User Management Project - NestJS & ReactJS

Este projeto é uma aplicação de gerenciamento de usuários construída com NestJS para o backend e ReactJS para o frontend. O projeto utiliza Docker Compose para executar o backend e o comando `yarn start` para iniciar o frontend.

## Backend (NestJS)

Para executar o backend, você precisará ter o Docker e o Docker Compose instalados em seu sistema. Se você ainda não os tiver instalado, pode seguir as instruções na documentação oficial do Docker [aqui](https://docs.docker.com/get-docker/) e do Docker Compose [aqui](https://docs.docker.com/compose/install/).

Depois de instalar o Docker e o Docker Compose, navegue até a pasta do projeto no terminal e execute o seguinte comando:


Isso irá construir e iniciar os contêineres do Docker definidos no arquivo `docker-compose.yml`.

O Swagger UI para a API do backend pode ser acessado através do seguinte link: [http://localhost:3002/swagger/#/](http://localhost:3002/swagger/#/)

## Frontend (ReactJS)

Para iniciar o frontend, primeiro você precisará instalar as dependências do projeto. Navegue até a pasta do frontend no terminal e execute o seguinte comando:


Depois de instalar as dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

Agora você deve ser capaz de acessar a aplicação no navegador em [http://localhost:3000](http://localhost:3000).

## Login de Admin

O login de administrador é:

- Email: bryan@email.com
- Senha: 36638947

## Banco de Dados (PostgreSQL)

Este projeto utiliza PostgreSQL como banco de dados. O esquema SQL do banco de dados está localizado na pasta `src/config/database` do projeto backend, no arquivo `schema.sql`.

Espero que isso ajude! Se você tiver mais perguntas ou precisar de mais detalhes, sinta-se à vontade para perguntar.
