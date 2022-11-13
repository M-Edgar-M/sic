
import express, { Express, Request, Response } from 'express';
require('dotenv').config()
const app: Express = express();
const cors = require('cors');
const Pool = require('pg').Pool;

require('dotenv').config()
const pool = new Pool({
  user: process.env.DB_NAME,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
})
// const pool = require('./db')


const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());



app.get('/', function (req: Request, res: Response) {
    res.send("GG's")
  })

  app.post('/create', async (req:Request, res: Response) => {
    try {
      const {first_name, surname, password, email} = req.body;
      const newUser = await pool.query('INSERT INTO users (first_name, surname, password, email) VALUES (1$, 2$, 3$, 4$', [first_name, surname, password, email]);
      console.log('🚀 ~ file: server.ts ~ line 34 ~ app.post ~ newUser', newUser)
    } catch (error) {
      console.error(error)
    }
      
    res.send(req.statusCode);
  })


app.listen(PORT || 5555);
