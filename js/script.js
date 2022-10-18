"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посомтрели?", "");
//console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просомтренных фильмов?", ""),
      b = prompt("На сколько вы оцениваете его?", ""),
      c = prompt("Один из последних просомтренных фильмов?", ""),
      d = prompt("На сколько вы оцениваете его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);