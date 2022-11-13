
import express, { Express, Request, Response } from 'express';
const app: Express = express();
require('dotenv').config()

const PORT = process.env.PORT;

app.get('/', function (req: Request, res: Response) {
    res.send("GG's")
  })


app.listen(PORT || 5555);