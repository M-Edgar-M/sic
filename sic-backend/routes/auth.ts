import express, { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { USER } from "../models/User.model";
const Router = require('express-promise-router')
const session = require('express-session')
const pool = require('../db')
const pgSession = require('connect-pg-simple')(session)
const passport = require('passport');

const router = new Router()
router.use(session({
  store: new pgSession({
    pool: pool,
    tableName: 'session'
    // Insert connect-pg-simple options here
  }),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  // Insert express-session options here
}));


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