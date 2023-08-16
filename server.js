const express = require('express')
const app = express()
const cors = require("cors");
const pool = require("./db_auth");
const port = 5000

app.use(cors());

app.get('/squares', async (req, res) => {
  console.log("squares")
  try {
    const answer = await pool.query("SELECT * FROM Squares");
    res.send(answer.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.put('/increment', async (req, res) => {
  console.log("increment")
  res.send({ message: 'Increment'});
  try {
    await pool.query("UPDATE Squares SET Squares_amount = Squares_amount + 1");
  } catch (err) {
    console.error(err.message);
  }
})


app.put('/reduction', async (req, res) => {
  console.log("Reduction")
  res.send({ message: 'Reduction'});
  try {
    await pool.query("UPDATE Squares SET Squares_amount = Squares_amount - 1");
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})