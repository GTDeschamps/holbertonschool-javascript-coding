const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          reject(new Error('No valid students in the database'));
        }
        const headers = lines[0].split(',');
        const studentsData = lines.slice(1);

        const Studentscount = studentsData.length;

        console.log(`Number of students: ${Studentscount}`);

        headers.forEach((field, index) => {
          const fieldData = studentsData.map((student) => student.split(',')[index]);
          const uniqueFieldData = [...new Set(fieldData.filter(Boolean))];
          const fieldCount = uniqueFieldData.length;

          console.log(`Number of students in ${field}: ${fieldCount}.List: ${uniqueFieldData.join(',')}`);
        });
        resolve(Studentscount);
      }
    });
  });
}

module.exports = countStudents;
