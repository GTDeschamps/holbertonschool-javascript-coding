#!/usr/bin/node
// write a script to get contents of webpage and store in file

const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: ./script.js <URL> <outputFilePath>');
  process.exit(1);
}

const url = process.argv[2];
const outputPath = process.argv[3];

request(url, (err, res, body) => {
  if (err) {
    console.error('Error:', err);
    process.exit(1);
  }

  if (res.statusCode !== 200) {
    console.error('Request failed with status code:', res.statusCode);
    process.exit(1);
  }

  fs.writeFile(outputPath, body, 'utf-8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing to file:', writeErr);
      process.exit(1);
    }
  });
});
