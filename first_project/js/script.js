'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних фильмов, который вы посмотели?', '');
// const b = prompt('На сколько вы его оцениваете?', '');
// const c = prompt('Один из последних фильмов, который вы посмотели?', '');
// const d = prompt('На сколько вы его оцениваете?', '');
let i = 0;

// for (let i = 0; i < numberOfFilms; i++) {
//     const nameOfFilm = prompt('Один из последних фильмов, который вы посмотели?', '');
//     const rateOfFilm = prompt('На сколько вы его оцениваете?', '');
//     personalMovieDB.movies[nameOfFilm] = rateOfFilm;
// }

console.log(personalMovieDB);

// while (i < 3) {
//     let nameOfFilm = prompt('Один из последних фильмов, который вы посмотели?', '');
//     if (nameOfFilm === null || nameOfFilm.length > 50 || nameOfFilm.length < 1) {
//         continue;
//     }

//     let rateOfFilm = prompt('На сколько вы его оцениваете?', '');
    
//     personalMovieDB.movies[nameOfFilm] = rateOfFilm;
//     i++;
// }

function rememberMyFilms() {
    while (i < 1) {
        let nameOfFilm = prompt('Один из последних фильмов, который вы посмотели?', '');
        if (nameOfFilm === null || nameOfFilm.length > 50 || nameOfFilm.length < 1) {
            continue;
        }
    
        let rateOfFilm = prompt('На сколько вы его оцениваете?', '');
        
        personalMovieDB.movies[nameOfFilm] = rateOfFilm;
        i++;
    }
}

rememberMyFilms();

console.log(personalMovieDB);

function detectPersonalLevel() {
    if (personalMovieDB.count < 1) {
        console.log('Произошла ошибка');
    }
    else if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    }
    
    else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    }
    
    else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();


function writeYourGenres() {
    for (i = 0; i < 3; i++) {
        // let yourGenres = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
        // personalMovieDB.genres.push(yourGenres);
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i+1}`, ``));
    }

}

writeYourGenres();


function showMyDB() {
    if (personalMovieDB.privat !== true) {
        console.log('Everything is fine! Here it is your object...');
        console.log(personalMovieDB);
    }
}

showMyDB();


