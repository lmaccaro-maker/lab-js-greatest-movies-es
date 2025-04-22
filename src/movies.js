

// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Step 1: Extract all director names
const directorArray = movies.map(movies => movies.director);

// Step 2: Remove duplicate director names
const uniqueDirectors = [...new Set(directorArray)];

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
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((accumulator, movie) => accumulator + (movie.score || 0), 0);

  const averageScore = totalScore / moviesArray.length;

  return parseFloat(averageScore.toFixed(2));
}

console.log(scoresAverage(movies)); // This will output the average score-> 8.31


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  if (dramaMovies.length === 0) return 0;

  const totalScore = dramaMovies.reduce((sum, movie) => {
    if (movie.score !== undefined) {
      return sum + movie.score;
    }
    return sum;
  }, 0);

  // Calcular el puntaje promedio
  const averageScore = totalScore / dramaMovies.length;

  // Devolver el promedio redondeado a dos decimales
  return Number(averageScore.toFixed(2));
}


console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

  // Create a copy of the array to avoid mutating the original
  const moviesCopy = [...moviesArray];

  // Sort the movies first by year, then by title if the years are the same

  moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year
    } else {
      return a.title.localeCompare(b.title); // Sort alphabetically by title if years are the same
    }
  });

  return moviesCopy; // Return the sorted array 
}

console.log(orderByYear(movies));  //ordered by year


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

  // Create a new array with just the titles
  const titlesArray = moviesArray.map(movie => movie.title);

  // Sort the titles alphabetically
  titlesArray.sort((a, b) => a.localeCompare(b));

  // Return the first 20 titles, or all of them if there are less than 20
  return titlesArray.slice(0, 20);
}

console.log(orderAlphabetically(movies)); // This will output the first 20 movie titles in alphabetical order


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    let duration = movie.duration;
    let hours = 0;
    let minutes = 0;

    // Extract hours and minutes
    let hourMatch = duration.match(/(\d+)h/);
    let minuteMatch = duration.match(/(\d+)min/);

    if (hourMatch) hours = parseInt(hourMatch[1]);
    if (minuteMatch) minutes = parseInt(minuteMatch[1]);

    let totalMinutes = (hours * 60) + minutes;


    return {
      ...movie,
      duration: totalMinutes
    };
  });
}

const updatedMovies = turnHoursToMinutes(movies);

console.log(updatedMovies); // Each movie's duration will now be in total minutes.


// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const scoresByYear = {};


  moviesArray.forEach(movie => {
    if (!scoresByYear[movie.year]) {
      scoresByYear[movie.year] = [];
    }
    scoresByYear[movie.year].push(movie.score);
  });

  let bestYear = null;
  let bestAverage = 0;

  // Calculate averages and find the best year

  for (const year in scoresByYear) {
    const scores = scoresByYear[year];
    const average = scores.reduce((acc, score) => acc + score, 0) / scores.length;

    if (average > bestAverage || (average === bestAverage && (!bestYear || year < bestYear))) {
      bestAverage = average;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(2)}`;
}

console.log(bestYearAvg(movies));  //result: The best year was 1972 with an average score of 9.20



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
