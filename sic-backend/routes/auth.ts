import express, { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { USER } from "../models/User.model";
const Router = require('express-promise-router')
const session = require('express-session')
// const pool = require('../db')
const pgSession = require('connect-pg-simple')(session)
const passport = require('passport');

require("dotenv").config();

const { Pool } = require("pg");
// const pool = new Pool({
//   user: process.env.DB_NAME,
//   host: process.env.DB_HOST,
//   database: process.env.DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: 5432,
// });

const conObject = {
  user: 'postgres',
  host: 'localhost',
  database: 'sic_backend',
  password: 'Dwin_Tech',
  port: 5432,
}

const pgStoreConfig = {
  // pgPromise: require('pg-promise')({ promiseLib: require('bluebird') })({ conObject }),
  conString:'postgres://postgres:Dwin_Tech@localhost:5432/sic_backend"'
}

// var PostgreSqlStore = require('connect-pg-simple')(session);
// var sessionOptions = {
//       secret: "secret",
//       resave : true,
//       saveUninitialized : false,
//       store : new PostgreSqlStore({
//         /*
//         connection string is built by following the syntax:
//         postgres://USERNAME:PASSWORD@HOST_NAME:PORT/DB_NAME
//         */
//         conString: "postgres://postgres:postgres@localhost:5433/postgres"
//       })
//     };

//     app.use(session(sessionOptions));

const router = new Router()
router.use(session({
  store: new pgSession(pgStoreConfig),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  // Insert express-session options here
}));

postgres://postgres:postgres@localhost:5433/postgres


require('../utilities/passport.auth');

passport.use(passport.initialize())
passport.use(passport.session())

router.use((req: any, res: any, next: any) => {
  console.log(req.session);
  console.log('user',req.user);
  next();
  
})


router.post('/login', passport.authenticate('local', { failureRedirect: '/login'}),(req: any, res: any) => {
  
  res.send('GG')
});

router.get('/login', (req: any, res: any) => {
    res.send('GET: Login')
  })




module.exports = router