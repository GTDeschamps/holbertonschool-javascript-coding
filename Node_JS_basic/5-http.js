const http = require('http');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is a list of our students\n');
    countStudents(db)
      .then((result) => {
        res.write(`${result.TotalStudents}\n`);
        res.write(`${result.CS}\n`);
        res.write(`${result.SWE}`);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  }
}).listen(1245);

module.exports = app;
