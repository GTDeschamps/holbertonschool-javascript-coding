const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databaseName = 'This is the list of our students';
  countStudents(process.argv[2])
    .then((result) => {
      const out = `${databaseName}\n${result.TotalStudents}\n${result.CS}\n${result.SWE}`;
      res.type('text/plain').send(out);
    })
    .catch((error) => {
      const out = `${databaseName}\n${error.message}`;
      res.type('text/plain').send(out);
    });
});
app.listen(1245);

module.exports = app;
