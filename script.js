let number0fFilms = +prompt("Сколько фильмов вы уже посмотрели", "2");

if (number0fFilms < 10) {
    alert('посмотрел слишком мало фильмов');
} else if (number0fFilms > 10 || number0fFilms < 30) {
    alert('классический зритель');
} else if (number0fFilms < 30) {
    alert(' вы киноман');
} else {
    alert('произошла ошибка');
    number0fFilms = +prompt("Сколько фильмов вы уже посмотрели", "Напишите число");
}

const personalMovieDB = {
    count: [number0fFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: false  
};

for (let i = 0; i < 2; i++) {
    let a = prompt("один из последних просмотреных фильмов", ""),
        b = prompt("на сколько оцениет его?", "");

    if( a != null && b != null && a != '' && b != '' && a.length < 5) {
        personalMovieDB.movies[a] = b;
    }   else {
        i--;
    }
}


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


console.log(personalMovieDB);