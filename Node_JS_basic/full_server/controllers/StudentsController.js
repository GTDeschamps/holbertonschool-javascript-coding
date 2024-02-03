const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase('path/to/database.json')
      .then(data => {
        const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        res.status(200).send(`This is the list of our students\n${fields.map(field => {
          const students = data[field];
          return `Number of students in ${field}: ${students.length}. List: ${students.map(student => student.firstname).join(', ')}`;
        }).join('\n')}`);
      })
      .catch(error => {
        res.status(500).send(`Cannot load the database. Error: ${error}`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.query;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase('path/to/database.json')
      .then(data => {
        const studentsInMajor = data[major] || [];
        res.status(200).send(`List: ${studentsInMajor.map(student => student.firstname).join(', ')}`);
      })
      .catch(error => {
        res.status(500).send(`Cannot load the database. Error: ${error}`);
      });
  }
}

module.exports = StudentsController;
