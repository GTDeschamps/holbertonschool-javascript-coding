#!/usr/bin/node
//write a script to print the number of apparition of Wedge ANtille
//in Star Wars movies.

const request = require ('request')
const url = process.argv[2];

request.get(`${url}`, (err, res, body) => {
  if (err){
    console.error(`Error:`, err);
    return;

  } else if (res.statusCode !== 200){
    console.error(`Code:`, res.statusCode);
    return;

  } else {
    const films = JSON.parse(body).results;
    const characterId = '18';

    const wedgeMovies = films.filter((film) => film.charaters.includes(`https://swapi-api.hbtn.io/api/films/${characterId}/`));

    console.log(`${wedgeMovies.length}`);
  }
});
