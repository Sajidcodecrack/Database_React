CREATE DATABASE Research_Hub;

USE Research_Hub;

DROP TABLE login_db;

CREATE TABLE registration_db (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE login_db (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

SELECT * FROM login_db;
SELECT * FROM registration_db;
SELECT name, email
FROM registration_db
WHERE age > 45;
