# DevDeploy Platform

A containerized full-stack application deployed on AWS EC2 using Docker and Docker Compose.

## Project Overview

DevDeploy Platform demonstrates how to containerize and run a full-stack application with separate frontend, backend, and database services.

The application uses Docker Compose to manage containers and their communication.

## Tech Stack

- **Frontend:** Web application
- **Backend:** Node.js and Express
- **Database:** PostgreSQL 16
- **Containerization:** Docker
- **Container Orchestration:** Docker Compose
- **Cloud Platform:** AWS EC2
- **Operating System:** Linux

## Architecture

```text
User / Browser
      |
      v
Frontend Container
Port 8080 -> 80
      |
      v
Backend Container
Port 3000 -> 3000
      |
      v
PostgreSQL Container
      |
      v
Database Volume
```

## Key Features

- Separate frontend, backend, and database containers.
- Docker Compose for managing multiple services.
- Container-to-container communication using Docker networking.
- PostgreSQL database integration.
- Persistent database storage using Docker volumes.
- Backend health verification.
- Deployment on an AWS EC2 instance.

## Getting Started

### Prerequisites

- Docker installed
- Docker Compose available
- Git installed

### Clone the Repository

```bash
git clone <https://github.com/purnima202/devdeploy-platform/>
cd devdeploy-platform
```
### Start the Application

```bash
docker compose up -d --build
```

### Check Running Containers

```bash
docker compose ps
```

### View Logs

```bash
docker compose logs
```

### Stop the Application

```bash
docker compose down
```

## Access the Application

- **Frontend:** `http://localhost:8080`
- **Backend API:** `http://localhost:3000/api/projects`

The backend API was tested and returned a response confirming that DevDeploy Platform was running.

For AWS deployment, use your EC2 public address and ensure the required ports are allowed by the security group.

## AWS EC2 Deployment

1. Launch an EC2 instance.
2. Connect to the instance using SSH.
3. Install and configure Docker and Docker Compose.
4. Clone the project repository.
5. Build and start the application using Docker Compose.
6. Verify the running containers and backend API.
7. Configure the required network access securely.

## What I Learned

- Writing Dockerfiles for application services.
- Running multiple containers with Docker Compose.
- Configuring Docker networks and volumes.
- Connecting a backend service to PostgreSQL.
- Deploying a containerized application on AWS EC2.
- Troubleshooting containers and verifying application health.

## Future Improvements

- Implement a CI/CD pipeline using GitHub Actions.
- Push Docker images to a container registry.
- Use Terraform to provision AWS infrastructure.
- Add monitoring with Prometheus and Grafana.
- Configure HTTPS and a domain name.

## Author

Purnima Jagdale
