const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const pool = require("./db");

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [""]
    );
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
