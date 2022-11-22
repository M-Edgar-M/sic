import express, { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { USER } from "../models/User.model";
const Router = require('express-promise-router')
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const pool = require('../db')
const pgSession = require('connect-pg-simple')(session)
// const passport = require('passport');
interface DONE {
    (err: Error | null, user: USER | boolean | any): void;
}
const LocalStrategy = require('passport-local').Strategy;

const router = new Router()
// require('../utilities/passport.auth');
  router.use(session({
    store: new pgSession({
      pool : pool,                // Connection pool
      tableName : 'session'
      // Insert connect-pg-simple options here
    }),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
    // Insert express-session options here
  }));



  router.get('/', (req: Request, res: Response) => {
    console.log(req.session)
    if(req.session.viewCount) {
      req.session.viewCount++
    } else {
      req.session.viewCount = 1;
    }
    res.send(`Visited this many times: ${req.session.viewCount}`)
  })

  
// router.use(passport.initialize());
// router.use(passport.session());


module.exports = router