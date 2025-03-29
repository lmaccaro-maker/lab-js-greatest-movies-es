

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Step 1: Extract all director names

const directorArray = movies.map(movies => movies.director);

// Step 2: Remove duplicate director names

const uniqueDirectors = [...new Set(directorArray)];

// Log the unique directors

console.log(uniqueDirectors);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  return moviesArray.filter(movies =>
    movies.director === 'Steven Spielberg'
  ).length;

}

console.log(howManyMovies(movies));  //result: 7


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0; // Handle empty array

  // Sum all scores using reduce, default to 0 for undefined scores
  const totalScore = moviesArray.reduce((accumulator, movie) => accumulator + (movie.score || 0), 0);

  // Calculate average score
  const averageScore = totalScore / moviesArray.length;

  // Return average rounded to two decimal places
  return parseFloat(averageScore.toFixed(2));
}

console.log(scoresAverage(movies)); // This will output the average score-> 8.31


// Iteration 4: Drama movies - Get the average of Drama Movies







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
