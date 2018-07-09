DROP DATABASE IF EXISTS MovieCatalogue;

CREATE DATABASE MovieCatalogue;

Use MovieCatalogue;

CREATE TABLE Customer (
    ID Int not null primary key auto_increment,
    Name Varchar(50) not null,
    Phone Varchar(20) not null,
    Email Varchar(50) not null
);

