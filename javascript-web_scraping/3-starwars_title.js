#!/usr/bin/node
//write a script to print the title ofa Star Wars movie
//where the number matches a given integer.

const request = require ('request')
const Id = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${Id}/`;

request.get(apiUrl, (err, res, body) => {
  if (err){
    console.error(`Error:`, err);
  } else if (res.statusCode !== 200){
	console.error(`Request failed :`, res.statusCode);
  } else{
	const movieData = JSON.parse(body);
    console.log(movieData.title);
  }
});

