const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

app.use(cors());
app.get("/todos/:user_email", async (req, res) => {
  const { user_email } = req.params;
  console.log(user_email);
  try {
    const allTodos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [user_email]
    );
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
