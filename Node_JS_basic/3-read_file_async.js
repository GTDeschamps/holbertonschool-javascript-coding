const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n').slice(1);
      let nbOfLine = 0;
      let csStudent = 0;
      let sweStudent = 0;
      let csString = '';
      let sweString = '';

      for (const line of lines) {
        if (line !== '') {
          nbOfLine += 1;
          const cutline = line.split(',');
          if (cutline[3] === 'CS') {
            csStudent += 1;
            if (csString !== '') {
              csString += ', ';
            }
            csString += cutline[0];
          } else if (cutline[3] === 'SWE') {
            sweStudent += 1;
            if (sweString !== '') {
              sweString += ', ';
            }
            sweString += cutline[0];
          }
        }
      }
      const result = {
        TotalStudents: `Number of students: ${nbOfLine}`,
        CS: `Number of students in CS: ${csStudent}. List: ${csString}`,
        SWE: `Number of students in SWE: ${sweStudent}. List: ${sweString}`,
      };
      console.log(result.TotalStudents);
      console.log(result.CS);
      console.log(result.SWE);
      resolve(result);
    });
  });
}

module.exports = countStudents;
