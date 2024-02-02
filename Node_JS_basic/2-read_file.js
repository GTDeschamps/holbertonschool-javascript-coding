const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const totalStudents = data.split('\n').filter(Boolean).slice(1).map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    });
    const csStudents = totalStudents.filter((student) => student.field === 'CS');
    const sweStudents = totalStudents.filter((student) => student.field === 'SWE');

    console.log(`Number of students: ${totalStudents.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student.firstname).join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student.firstname).join(', ')}`);
  } catch (error) {
    throw new Error(`Cannot load the database: ${error.message}`);
  }
}

module.exports = countStudents;
