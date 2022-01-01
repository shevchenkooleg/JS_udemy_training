const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geres: [],
    peivat: false
};

const a = prompt('Один из последних фильмов, который вы посмотели?', '');
const b = prompt('На сколько вы его оцениваете?', '');
const c = prompt('Один из последних фильмов, который вы посмотели?', '');
const d = prompt('На сколько вы его оцениваете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

