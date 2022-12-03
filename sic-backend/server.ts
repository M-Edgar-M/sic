import express, { Express } from "express";
const passport = require('passport');
const app: Express = express();
const mountRoutes = require('./routes/index.ts')
const session = require('express-session')
const pgSession = require('connect-pg-simple')(session);
const pgPool = require('./db');

// Configure PORT
const PORT = process.env.PORT;

// APP SESSION
app.use(session({
    store: new pgSession({
      pool : pgPool,                // Connection pool
      tableName : 'session'   // Use another table-name than the default "session" one
      // Insert connect-pg-simple options here
    }),
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
    // Insert express-session options here
  }));


// Router
mountRoutes(app)

app.listen(PORT || 5555);
