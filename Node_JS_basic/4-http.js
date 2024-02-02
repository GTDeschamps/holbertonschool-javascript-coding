const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'content-Type': 'Text/plain' });
  res.end('Hello Holberton School\n');
});

const PORT = 1245;
module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost: ${PORT}/`);
  });
}
