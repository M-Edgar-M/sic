import express, { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { USER } from "../models/User.model";
const Router = require('express-promise-router')
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const pool = require('../db')
const passport = require('passport');
interface DONE {
    (err: Error | null, user: USER | boolean | any): void;
}
const LocalStrategy = require('passport-local').Strategy;

const router = new Router()
require('../utilities/passport.auth');

// const users = [
//   { id: '2f24vvg', email: 'test@test.com', password: 'password' }
// ]

router.use(session({
    genid: (req: Request) => {
      console.log('Inside the session middleware')
      console.log(req.sessionID)
      return uuidv4() // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: 'keyboard cat', // TODO: set yhis to env
    resave: false,
    saveUninitialized: true
  }))



  router.get('/', (req: Request, res: Response) => {
    console.log('session ID',req.sessionID)
    console.log('Inside the homepage callback function')
    res.send(`You hit home page!\n`)
  })

  
router.use(passport.initialize());
router.use(passport.session());

  router.post('/login', (req: any, res: any, next: any) => {
    console.log('Inside POST /login callback')
    passport.authenticate('local', (err: any, user: any, info: any) => {
      console.log('Inside passport.authenticate() callback');
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
      console.log(`req.user: ${JSON.stringify(req.user)}`)
      req.login(user, (err: any) => {
        console.log('Inside req.login() callback')
        console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
        console.log(`req.user: ${JSON.stringify(req.user)}`)
        return res.send('You were authenticated & logged in!\n');
      })
    })(req, res, next);
  })

  router.get('/authrequired', (req: any, res: Response) => {
    console.log('Inside GET /authrequired callback')
    console.log(`User authenticated? ${req.isAuthenticated()}`)
    if(req.isAuthenticated()) {
      res.send('you hit the authentication endpoint\n')
    } else {
      res.redirect('/')
    }
  })


module.exports = router