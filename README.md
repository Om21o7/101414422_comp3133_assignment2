# 101414422Comp3133Assignment2

This project is built using **Angular** for the frontend and **Node.js** with **Express** for the backend. The project uses **Docker** for containerization, and **GraphQL** is used as the backend API.

---

## Development Setup

To get the project up and running, you need to set up both the **frontend** (Angular) and **backend** (Node.js) parts of the project.

---

### 1. Frontend Setup (Angular)

1. **Navigate to the frontend directory**:

    cd frontend


2. **Install dependencies**:

    Install the required dependencies using npm:

    npm install --legacy-peer-deps


3. **Run the development server**:

    To start the Angular development server, run:

    ng serve



- This will launch the Angular application at `http://localhost:4200/`.
- The application will automatically reload when changes are made to the source files.

---

### 2. Backend Setup (Node.js + GraphQL)

1. **Navigate to the backend directory**:

    cd backend


2. **Install dependencies**:

    Install the required dependencies using npm:

    npm install


3. **Run the backend server**:

    To start the backend server, run:

    node src/index.js or   npm run start


- This will start the server at `http://localhost:4000/graphql`.

---

### 3. Running Both Servers with Docker

1. **Build and start the containers**:

    Run the following command to build and start both frontend and backend containers:

    docker-compose up --build

2. **Access the application**:

- Frontend will be available at `http://localhost:4200`.
- Backend GraphQL API will be available at `http://localhost:4000/graphql`.

---

## Docker Setup

For easier management of the application, Docker is used to run both the frontend and backend inside containers.

### Backend Dockerfile

The backend Dockerfile is set up to build and run the Node.js application in a container.

### Frontend Dockerfile

The frontend Dockerfile is set up to build and serve the Angular application with Nginx.

### Docker Compose

The `docker-compose.yml` file is used to run both the frontend and backend services together.

To start both services using Docker, simply run:

docker-compose up --build    

This will set up the containers, and you can access:
- Frontend at `http://localhost:4200`
- Backend GraphQL API at `http://localhost:4000/graphql`

---

## Additional Resources

For more information on using Angular CLI and Docker, visit these official resources:
- [Angular CLI Overview and Command Reference](https://angular.io/cli)
- [Docker Documentation](https://docs.docker.com/)

---
