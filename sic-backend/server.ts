import express, { Express, Request, Response } from "express";
const cors = require("cors");
require("dotenv").config();
const app: Express = express();
const pool = require("./db");

require("dotenv").config();
// Configure PORT
const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

app.post("/create", async (req: Request, res: Response) => {
  try {
    const { first_name, surname, password, email } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (first_name, surname, password, email) VALUES ($1,$2,$3,$4) RETURNING *",
      [first_name, surname, password, email]
    );
    res.send(newUser.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT || 5555);
