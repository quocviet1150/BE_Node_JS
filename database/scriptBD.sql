-- Script Database

CREATE DATABASE vinfast

-- Select database

CREATE TABLE users (
    id INTEGER PRIMARY KEY, 
    name VARCHAR(64)
)

INSERT INTO users(id, name) 
VALUES(1, 'Vinicius'), (2, 'Beletate')