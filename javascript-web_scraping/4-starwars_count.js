#!/usr/bin/node
// write a script to print the number of apparition of Wedge Antille
// in Star Wars movies.

const request = require('request');

const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.error('Error:', err);
  } else {
    const films = JSON.parse(body).results;
    let apparition = 0;

    for (const film of films) {
      for (const character of film.characters) {
        if (character.includes('/18/')) {
          apparition += 1;
          break;
        }
      }
    }
    console.log(apparition);
  }
});
