BEGIN;

DROP TABLE  IF EXISTS users ,blogs CASCADE;

CREATE TABLE users (
    id serial PRIMARY KEY ,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(225) NOT NULL
);

CREATE TABLE blogs (
    id serial PRIMARY KEY ,
    title VARCHAR(50) ,
    content  text NOT NULL,
    user_id INT	REFERENCES users(id) ON UPDATE CASCADE
);

COMMIT ;
