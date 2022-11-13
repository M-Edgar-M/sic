CREATE DATABASE sic_backend;

CREATE TABLE users(
    user_id serial PRIMARY KEY, 
    first_name VARCHAR ( 50 ) NOT NULL,
    surname VARCHAR ( 50 ) NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP,
    public_id VARCHAR(255) NOT NULL DEFAULT gen_random_uuid()
    );