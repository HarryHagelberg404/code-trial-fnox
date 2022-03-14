# Installing and running the application

# Database: docker run --name myDatabase -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres

docker build -t database ./where dockerfile is
docker run -d --name db-container -p 5432:5432 database

