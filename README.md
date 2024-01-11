# User Management Project

Este projeto é um sistema de gerenciamento de usuários desenvolvido com NestJS (backend) e ReactJS (frontend). Siga as instruções abaixo para executar o projeto localmente.

## Backend (NestJS)

### Configurações do PostgreSQL

Crie um arquivo `.env` no diretório `backend` com as seguintes configurações para o PostgreSQL:

```env
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=3663
DB_DATABASE=postgres


Instruções de Execução
bash
Copy code
cd backend
docker-compose up


# O backend estará disponível em http://localhost:3002.

#O Swagger estará disponível em http://localhost:3002/swagger/#/.

Credenciais de Admin
Email: bryan@email.com
Senha: 36638947
SQL Schema
O arquivo SQL do esquema de dados está localizado em backend/src/config/database/schema.sql.

Frontend (ReactJS)
Requisitos
Certifique-se de ter o Node.js e o Yarn instalados em seu ambiente.

Instruções de Execução

bash
Copy code
cd frontend
yarn install
yarn start

#O frontend estará disponível em http://localhost:3000.

#Agora você pode acessar e interagir com o sistema de gerenciamento de usuários.

##Observação: Certifique-se de ter o backend em execução antes de iniciar o frontend.

