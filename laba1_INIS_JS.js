let numberOfFilms = prompt("Сколько фильмов ты посмотрел?");
while (isNaN(numberOfFilms)){
  alert("ОШИБКА! (Введите числовое значение)");
  numberOfFilms = prompt("Сколько фильмов ты посмотрел?");
}
let personalMovieDB = {
  count: numberOfFilms,
  movies: {}
};

let movieName, movieRating;

for (let i = 0; i < 2; i++) {
  movieName = prompt("Один из последних просмотренных фильмов?");
  while (
    movieName == "" ||
    movieName == null ||
    movieName.length > 50)
    {
    alert("Попробуйте снова :(");
    movieName = prompt("Один из последних просмотренных фильмов?");
  }
  
  ////////////////////////////////////////
  movieRating = prompt("Как оцените данный фильм?");
  while (
    movieRating == "" ||
    movieRating == null ||
    movieRating.length > 50 ||
    isNaN(movieRating)
  ) {
    alert("Попробуйте снова :(");
    movieRating = prompt("Как оцените данный фильм?");
  }

  personalMovieDB.movies[movieName] = movieRating;
  
}
for (const movie in personalMovieDB.movies) {
  document.write("Фильм: " + movie + " - Оценка: " + personalMovieDB.movies[movie] + "<br>");
      }
console.log(personalMovieDB);
