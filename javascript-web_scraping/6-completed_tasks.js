#!/usr/bin/node
// write a script that compute the number of task complete by user id


const request = require('request');
const url = process.argv[2];

request.get(url, (err, res, body) => {
  if (err) {
    console.error('Error:', err);
    process.exit(1);
  }

  if (res.statusCode !== 200) {
    console.error('Request failed with status code:', res.statusCode);
    process.exit(1);
  }

  const todos = JSON.parse(body);

  const completedTasksByUser = {};

  todos.forEach((task) => {
    if (task.completed) {
      const {userId} = task;

      if (!completedTasksByUser[userId]) {
        completedTasksByUser[userId] = 1;
      } else {
        completedTasksByUser[userId]++;
      }
    }
  });
  const result={};
  Object.entries(completedTasksByUser).forEach(([userId, completedTasksByUser]) => {
	result[userId] = completedTasksByUser;
  });
    console.log(result);
});
