BEGIN;

DROP TABLE  IF EXISTS users ,blogs CASCADE;

CREATE TABLE users (
    id serial PRIMARY KEY ,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(125) NOT NULL,
    password VARCHAR(225) NOT NULL
);

CREATE TABLE blogs (
    id serial PRIMARY KEY ,
    titel VARCHAR(50) ,
    content  text NOT NULL,
    user_id INT	REFERENCES users(id) ON UPDATE CASCADE
);

COMMIT ;
