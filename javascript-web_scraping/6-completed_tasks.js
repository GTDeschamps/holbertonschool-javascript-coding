#!/usr/bin/node
// write a script that compute the number of task complete by user id


const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request(apiUrl, (err, res, body) => {
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

  todos.forEach((todo) => {
    if (todo.completed) {
      if (completedTasksByUser[todo.userId] === undefined) {
        completedTasksByUser[todo.userId] = 1;
      } else {
        completedTasksByUser[todo.userId]++;
      }
    }
  });

  Object.entries(completedTasksByUser).forEach(([userId, completedTasks]) => {
    console.log(`'${userId}': ${completedTasks}`);
  });
});
