const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then(data => {
        const parsedData = JSON.parse(data);

        const result = {};

        Object.keys(parsedData).forEach(field => {
          const students = parsedData[field];
          result[field] = students.map(student => student.firstname);
        });

        resolve(result);
      })
      .catch(error => {
        reject(`Error reading the database: ${error.message}`);
      });
  });
}

module.exports = {
  readDatabase,
};
