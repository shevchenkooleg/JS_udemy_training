'use strict';

let i = 1;
// function start() {
//     numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
//     }
// }



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        let j = 0;
        while (j < 1) {
            let nameOfFilm = prompt('Один из последних фильмов, который вы посмотели?', '');
            if (nameOfFilm === null || nameOfFilm.length > 50 || nameOfFilm.length < 1) {
                continue;
            }
        
            let rateOfFilm = prompt('На сколько вы его оцениваете?', '');
            
            personalMovieDB.movies[nameOfFilm] = rateOfFilm;
            j++;
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 1) {
            console.log('Произошла ошибка');
            return 'Произошла ошибка';
        }
        else if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
            return 'Просмотрено довольно мало фильмов';
        }
        else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
            return 'Вы классический зритель';
        }
        
        else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
            return 'Вы киноман';
        }
        
        else {
            console.log('Произошла ошибка');
            // return 'Произошла ошибка';
        }
    },

    writeYourGenres: function() {
        for (i = 0; i < 3; i++) {
            let yourGenres = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
            if (yourGenres == null || yourGenres === '') { 
                i--;
            } else {
                personalMovieDB.genres.push(yourGenres);
            }
        }

        personalMovieDB.genres.forEach(function(elem, i, arr) {
            console.log(`Любимый жанр #${i + 1} - это ${elem}.`);
        });
    },

    showMyDB: function() {
        if (personalMovieDB.privat !== true) {
            console.log('Everything is fine! Here it is your object...');
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();

console.log(personalMovieDB);

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();
