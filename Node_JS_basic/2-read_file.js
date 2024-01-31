const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const totalStudents = lines.length - 1;
    const fieldCounts = {};

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (field && field.trim() !== '') {
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(firstname);
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const field of Object.keys(fieldCounts)) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const students = fieldCounts[field];
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    }
  } catch (error) {
    console.error(`Cannot load the database: ${error.message}`);
  }
}

module.exports = countStudents;
