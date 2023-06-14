# Product Importer Project

Simple implementation of importing products from a source file

## Requirements

Before getting started, make sure you have the following requirements installed on your machine:

- Docker: [Docker Installation](https://docs.docker.com/get-docker/)
- Docker Compose: [Docker Compose Installation](https://docs.docker.com/compose/install/)

## Configuration

1. Clone this repository to your machine:

```shell
git clone https://github.com/rodrigotoledo/project_importer_react
cd project_importer_react
```

## Running the Project

Open a terminal in the project folder and execute the following command to build and start the Docker containers:

```
docker-compose up
```

Wait for Docker to download the images and start the containers. Once completed, you will see the terminal output indicating that the Rails server is running.

Access the project's API at http://localhost:3000 or the specified port in the Dockerfile.