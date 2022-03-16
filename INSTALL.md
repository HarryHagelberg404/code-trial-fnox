# Installing and running the application

The steps should be performed in documented order in order to work.

### Prerequities:
  - Gradle installed.
  - npm and Node installed.
  - docker installed.
  - network access (for pulling the docker image and installing dependencies).

## Frontend

- Open up a terminal and change directory to "code-trial-fnox/frontend".
- Type: "npm install" in the terminal.
- Type: "npm start" in the terminal.

The frontend should now be started and a web application should now be displayed.

## Database

- Open up a terminal and change directory to "code-trial-fnox/backend".
- Type: "docker build -t database-image ./app/src/main/resources/".
- Type: "docker run -d --name database-container -p 5432:5432 database-image".

A docker container should now be up and running that we will use as persistence.

## Backend

- Open up a terminal and change directory to "code-trial-fnox/backend".
- Type: "gradle run".

The backend should now be started and you should now be able to use the entire application.

# Testing the application

## Frontend

- Open up a terminal and change directory to "code-trial-fnox/frontend".
- Type: "npm test".

The frontend tests should now be running.

## Backend

- Open up a terminal and change directory to "code-trial-fnox/backend".
- Type: "gradle test".

The backend tests should now be running.
