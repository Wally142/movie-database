DROP DATABASE IF EXISTS MovieCatalogue;

CREATE DATABASE MovieCatalogue;

Use MovieCatalogue;

CREATE TABLE movies (
    ID Int not null primary key auto_increment,
    movieTitle Varchar(100) not null,
    releaseDate int,
    mpaaRating Varchar(10),
    directorName Varchar(100),
    studioName Varchar(50),
    userRating Varchar (20)
);

