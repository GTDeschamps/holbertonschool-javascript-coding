const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'content-Type': 'Text/plain' });
  res.end('Hello Holberton School\n');
});

const port = 1245;
module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost: ${port}/`);
  });
}
