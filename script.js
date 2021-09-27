let number0fFilms;
let personalMovieDB = {
    count: [number0fFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    number0fFilms = +prompt("Сколько фильмов вы уже посмотрели", "2");
    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt("Сколько фильмов вы уже посмотрели", "2");
    }
}
function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('посмотрел слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('вы киноман');
        console.log("ты киноман");
    } else {
        alert('произошла ошибка');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("один из последних просмотреных фильмов", ""),
            b = prompt("на сколько оцениет его?", "");
    
        if( a != null && b != null && a != '' && b != '' && a.length < 5) {
            personalMovieDB.movies[a] = b;
        }   else {
            i--;
        }
    }
}

function showMyDB() {
    while (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
        break;
    }
}

function writheYourGenres() {
    for (let i = 1; i < 4; i++) {
        let a = prompt(`любимый жанр по номером ${i}`);
        if( a != null &&  a != '' && a.length < 15) {
            personalMovieDB.genres[ i - 1] = a;
        } else {
            i--;
        }
    }
}

writheYourGenres();
showMyDB();
start();
detectedPersonalLevel();
rememberMyFilms();

/* console.log(personalMovieDB); */

























/*  `````````````````````````````` \/ проверка на других циклах \/  ````````````````````````` */

/* let i = 0;

    while ( i < 2) {
        let a = prompt("один из последних просмотреных фильмов", "");
        let b = prompt("на сколько оцениет его?", "");
        i++;
        personalMovieDB.movies[a] = b;
        
    } */


/* let i = 0;
    do {
        let a = prompt("один из последних просмотреных фильмов", "");
        let b = prompt("на сколько оцениет его?", "");
        i++;
        personalMovieDB.movies[a] = b;
    }
    while (i < 2); */

/*  `````````````````````````` /\ ````````````````````````````` */



