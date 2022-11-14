import express, { Express } from "express";
const app: Express = express();
const mountRoutes = require('./routes/index.ts')

// Configure PORT
const PORT = process.env.PORT;

// Router
mountRoutes(app)

app.listen(PORT || 5555);
