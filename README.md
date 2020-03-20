# PRES CRUD

PRES CRUD is stand for Postgres React Express Semantic-UI CRUD. It is a project using React and Semantic UI as the frontend - Express and PostgreSQL as backend and the database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for study and development purposes. There's no plan for this project to continue for deployment.

### Prerequisites

- NodeJS
- PostgreSQL
- Yarn

There are several step before dive into the installation.

1. open psql shell and connect to database

2. Create database

```
CREATE DATABASE gsh;
```

3. Connect to gsh

```
\c gsh
```

4. Create table (create table 'books')

```
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);
```

5. Let the table empty (or you can add several data if you desire)

### Installing

Simply run this command in your terminal

```
yarn install
```

## Running the Application

To run this application, run this command on root directory.

```
npm run start
```

Application will start automatically on : `http://localhost:3000`
