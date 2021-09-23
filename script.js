const number0fFilms = +prompt("Сколько фильмов вы уже посмотрели", "Напишите число");

const personalMovieDB = {
    count: [number0fFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: false  
};

const a = prompt("один из последних просмотреных фильмов", "название фильма");
const b = prompt("на сколько оцениет его?", "от 1 до 10");
const c = prompt("один из последних просмотреных фильмов", "название фильма");
const d = prompt("на сколько оцениет его?", "от 1 до 10");

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);