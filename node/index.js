const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: 'db', // same as your MySQL service name in docker-compose
  user: 'root',
  password: 'root',
  database: 'nodedb'
});

connection.connect();

app.get('/', (req, res) => {
  // Add a record
  const sqlInsert = "INSERT INTO people(name) VALUES('Bruno')";
  connection.query(sqlInsert, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  // Fetch records
  connection.query('SELECT name FROM people', function (error, results, fields) {
    if (error) throw error;
    res.send(`<h1>Full Cycle Rocks!</h1><ul>${results.map(row => `<li>${row.name}</li>`).join('')}</ul>`);
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
