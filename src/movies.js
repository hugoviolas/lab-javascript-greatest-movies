// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const moviesdata = require("./data");

function getAllDirectors(moviesArray) {
  let directorsArray = moviesArray.map((elem) => elem.director);
  //console.log(directorsArray);
  return directorsArray;
}
//getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramaMovies = moviesArray.filter((elem) => {
    if (elem.genre.includes("Drama") && elem.director === "Steven Spielberg") {
      return elem;
    }
  });
  console.log(dramaMovies.length);
  return dramaMovies.length;
}
//howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let scores = [];
  moviesArray
    .filter((elem) => {
      return elem.score;
    })
    .map((elem) => {
      if (elem.score !== null) {
        scores.push(elem.score);
      }
    });
  let scoreSum = Number(
    scores.reduce((a, b) => {
      return a + b;
    }, 0)
  );
  let averageScore = (scoreSum / moviesArray.length).toFixed(2);
  return moviesArray.length === 0 ? 0 : Number(averageScore);
}
scoresAverage(moviesdata);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let scores = [];
  let filmCount = 0;
  moviesArray.map((elem) => {
    if (elem.genre.includes("Drama")) {
      scores.push(elem.score);
      filmCount += 1;
    }
  });
  if (scores.length > 0) {
    let sum = Number(scores.reduce((a, b) => a + b));
    let average = Number((sum / filmCount).toFixed(2));
    return filmCount === 0 ? 0 : average;
  } else {
    return 0;
  }
}
// dramaMoviesScore([
//   {
//     title: "PK",
//     year: 2014,
//     director: "Rajkumar Hirani",
//     duration: "2h 33min",
//     genre: ["Comedy", "Fantasy", "Sci-Fi"],
//     score: 8.2,
//   },
// ]);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = [...moviesArray];
  function alphabeticalSort(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === 0) return 0;
  }

  newArray.sort((elemA, elemB) => {
    if (elemA.year === elemB.year) {
      return alphabeticalSort(elemA.title, elemB.title);
    } else {
      return elemA.year - elemB.year;
    }
  });
  console.log(newArray);
  return newArray;
}
//orderByYear(moviesdata);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  function alphabeticalSort(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === 0) return 0;
  }

  let firstTitles = [...moviesArray];
  let array = [];

  firstTitles.sort((elemA, elemB) => {
    return alphabeticalSort(elemA.title, elemB.title);
  });

  firstTitles.map((elem, index) => {
    if (index < 20) {
      array.push(elem.title);
    }
  });

  console.log(array);
  return array;
}
//orderAlphabetically(moviesdata);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let hourArray = JSON.parse(JSON.stringify(moviesArray));
  let timeArray = [];

  function convertHoursToMinutes(h, m) {
    if (m) {
      let hour = Number(h) * 60;
      let totalTime = hour + Number(m);
      return totalTime;
    } else {
      return Number(h) * 60;
    }
  }

  hourArray.map((elem) => {
    timeArray.push(
      elem.duration.replace("h", "").replace("min", "").split(" ")
    );
  });

  timeArray.forEach((x) => {
    return convertHoursToMinutes(x[0], x[1]);
  });
  let toMinutes = [];
  timeArray.forEach((x) => {
    toMinutes.push(convertHoursToMinutes(x[0], x[1]));
  });

  hourArray.map((x, index) => {
    x.duration = toMinutes[index];
  });
  console.log(hourArray);
  return hourArray;
}
turnHoursToMinutes([{ duration: "2h" }]);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
