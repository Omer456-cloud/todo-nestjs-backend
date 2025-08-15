<p align="center"> <a href="http://nestjs.com/" target="_blank"> <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" /> </a> </p> <h1 align="center">Todo API – NestJS + PostgreSQL</h1> <p align="center"> A backend API for managing tasks, built with <a href="http://nestjs.com/" target="_blank">NestJS</a> and <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>. Implements full CRUD operations with pagination, filtering, and Swagger documentation. </p>
🚀 Features

Create, read, update, and delete tasks

Pagination and filtering support

Status & priority enums for tasks

Swagger API documentation at /api

PostgreSQL database (Dockerized)

📂 Tech Stack

Backend: NestJS

Database: PostgreSQL (via TypeORM)

Containerization: Docker + Docker Compose

API Documentation: Swagger

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Omer456-cloud/todo-nestjs-backend.git
cd todo-nestjs-backend

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file in the root directory:

DB_HOST=localhost
DB_PORT=5433
DB_USER=todo_user
DB_PASS=todo_pass
DB_NAME=todo_db


💡 Tip: Use port 5433 if running alongside a local PostgreSQL instance to avoid conflicts.

4️⃣ Start PostgreSQL (Docker)
docker compose up -d db

5️⃣ Start the API
npm run start:dev


The API will be available at:

http://localhost:3000


Swagger Docs:

http://localhost:3000/api

📌 API Endpoints
Method	Endpoint	Description
POST	/tasks	Create a new task
GET	/tasks	List tasks (pagination/filter)
GET	/tasks/:id	Get a single task
PATCH	/tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task
📊 Task Options

Status:

Pending

In Progress

Done

Paused

Priority:

Red (High)

Yellow (Medium)

Blue (Normal)

🐳 Docker Commands

Start the database:

docker compose up -d db


Stop the database and remove data:

docker compose down -v

👨‍💻 Author

Omer Nazeer Awan
GitHub Profile
