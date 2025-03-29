

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Step 1: Extract all director names
const directorArray = movies.map(movie => movie.director);

// Step 2: Remove duplicate director names
const uniqueDirectors = [...new Set(directorArray)];

// Log the unique directors
console.log(uniqueDirectors);

//

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  return moviesArray.filter(movie =>
    movie.director === 'Steven Spielberg'
  ).length;

}

console.log(howManyMovies(movies)); //result: 7

//


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray.length === 0) return 0; 

  // Sumar todos los puntajes

  const totalScore = moviesArray.reduce((accumulator, movie) => {
    return accumulator + (movie.score || 0); // Sumar score, manejando casos donde score podría no estar definido
  }, 0);

  const averageScore = totalScore / moviesArray.length;

  return parseFloat(averageScore.toFixed(2));
}

console.log(scoresAverage(movies)); //result: 8.31




//

// Iteration 4: Drama movies - Get the average of Drama Movies


  function dramaMoviesScore(moviesArray) {

    // Filtrar las películas que son de género Drama
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  
    if (dramaMovies.length === 0) return 0; // Si no hay películas de drama, devolver 0
  
    // Calcular la suma de las puntuaciones de las películas de drama

    const totalScore = dramaMovies.reduce((accumulator, movie) => {
      return accumulator + (movie.score || 0); // Sumar el score, manejando casos donde puede no estar definido
    }, 0);
  
    // Calcular el promedio de las puntuaciones
    const averageScore = totalScore / dramaMovies.length;
  
    // Redondear a dos decimales
    return parseFloat(averageScore.toFixed(2));
  }

  console.log(dramaMoviesScore(movies));
  
  // Ejemplo de uso con un arreglo de películas
  const movies = [
    { title: 'The Shawshank Redemption', genre: ['Crime', 'Drama'], score: 9.3 },
    { title: 'Schindler\'s List', genre: ['Biography', 'Drama', 'History'], score: 8.9 },
    { title: 'Saving Private Ryan', genre: ['Drama', 'War'], score: 8.6 },
    { title: 'Finding Nemo', genre: ['Animation', 'Adventure', 'Comedy'], score: 8.1 }
  ];
  
  console.log(dramaMoviesScore(movies)); // Imprime el promedio de los puntajes de películas de drama con 2 decimales

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
