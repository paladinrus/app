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


for (let i = 0; i <2; i++) {
    const a = prompt("Один из последних просомтренных фильмов?", ""),
          b = prompt("На сколько вы оцениваете его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }

    
}


if (personalMovieDB.count < 10) {
    console.log('Просомтрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count <= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}




console.log(personalMovieDB);