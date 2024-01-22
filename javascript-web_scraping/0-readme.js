#!/usr/bin/node
//write a script to read and print the content of a file.

const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err,filecontent) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log(filecontent)
  }
});
