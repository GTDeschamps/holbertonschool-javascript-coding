#!/usr/bin/node
// write a script to display the status code

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.error(`code: ${error.message}`);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
