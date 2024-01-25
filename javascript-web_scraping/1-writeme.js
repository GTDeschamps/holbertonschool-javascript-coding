#!/usr/bin/node
// Write a script that write a string in the file

const fs = require('fs');

const filePath = process.argv[2];
const string = process.argv[3];

fs.writeFile(filePath, string, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
