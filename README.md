Projeto de Gerenciamento de Usuários
Visão Geral
Este projeto é um sistema de Gerenciamento de Usuários construído com NestJS e ReactJS. O backend, alimentado pelo NestJS, utiliza o Docker Compose para fácil implantação, enquanto o frontend, construído com ReactJS, pode ser iniciado usando o Yarn. A documentação Swagger para a API pode ser acessada em http://localhost:3002/swagger/#/.

Pré-requisitos
Antes de executar o projeto, certifique-se de ter o seguinte instalado:

Docker
Docker Compose
Node.js (para o Yarn)
Yarn
Configuração do Backend
Navegue até o diretório do backend:

bash
Copy code
cd backend
Crie uma cópia do arquivo .env.example e nomeie-a como .env:

bash
Copy code
cp .env.example .env
Atualize o arquivo .env com a configuração do seu banco de dados PostgreSQL:

env
Copy code
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=3663
DB_DATABASE=postgres
Compile e execute o backend usando o Docker Compose:

bash
Copy code
docker-compose up -d
Para inicializar o banco de dados com o esquema, localize o arquivo SQL em backend/src/config/database/schema.sql.

Configuração do Frontend
Navegue até o diretório do frontend:

bash
Copy code
cd frontend
Instale as dependências necessárias:

bash
Copy code
yarn install
Inicie a aplicação frontend:

bash
Copy code
yarn start
O frontend estará acessível em http://localhost:3000.

Login Padrão do Administrador
Email: bryan@email.com
Senha: 36638947
Uso
Visite http://localhost:3002/swagger/#/ para explorar a documentação da API.
Utilize as credenciais de login fornecidas para acessar o painel de administração.
Sinta-se à vontade para entrar em contato se encontrar algum problema ou tiver dúvidas!
