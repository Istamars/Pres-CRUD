# PRES CRUD

PRES CRUD is stand for Postgres React Express Semantic-UI CRUD. It is a project using React and Semantic UI as the frontend - Express and PostgreSQL as backend and the database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for study and development purposes. There's no plan for this project to continue for deployment.

### Prerequisites

- NodeJS
- PostgreSQL
- Yarn

There are several step before dive into the installation.

1. Create database

```
CREATE DATABASE gsh
  WITH
  OWNER = postgres
  ENCODING = 'UTF8'
  LC_COLLATE = 'English_Indonesia.1252'
  LC_CTYPE = 'English_Indonesia.1252'
  TABLESPACE = pg_default
  CONNECTION LIMIT = -1;
```

2. Create table (create table 'books')

```
CREATE TABLE public.books
(
id integer NOT NULL DEFAULT nextval('books_id_seq'::regclass),
author character varying(255) COLLATE pg_catalog."default" NOT NULL,
title character varying(255) COLLATE pg_catalog."default" NOT NULL,
CONSTRAINT books_pkey PRIMARY KEY (id)
)
WITH (
OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public.books
OWNER to postgres;
```

3. Let the table empty (or you can add several data if you desire)

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
