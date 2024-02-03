const express = require('express');
const routes = require('./routes');

const app = express();
const port = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

// Start the server on port 1245
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

 module.exports =app;
