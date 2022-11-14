import express, { Request, Response } from "express";
const Router = require('express-promise-router')
const pool = require('../db')

const router = new Router()

// GET USER BY ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id])
  res.send(rows[0])
})

// CREATE USER
router.post("/create", async (req: Request, res: Response) => {
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

  module.exports = router