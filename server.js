const express = require('express')
const app = express()
const cors = require("cors");
const pool = require("./db_auth");
const port = 5000

app.use(cors());

app.get('/increment', async (req, res) => {
  console.log("increment")
  res.send({ message: 'Increment'});
  try {
    const allTodos = await pool.query("SELECT * FROM Persons");
    console.log(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get('/reduction', async (req, res) => {
    console.log("Reduction")
    res.send({ message: 'Reduction' });
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})