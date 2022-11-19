import express, { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
const Router = require('express-promise-router')
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const pool = require('../db')

const router = new Router()

router.use(session({
    genid: (req: Request) => {
      console.log('Inside the session middleware')
      console.log(req.sessionID)
      return uuidv4() // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

  router.get('/', (req: Request, res: Response) => {
    console.log('session ID',req.sessionID)
    console.log('Inside the homepage callback function')
    res.send(`You hit home page!\n`)
  })

  router.post('/login', (req: Request, res: Response) => {
    console.log('Inside POST /login callback function')
    console.log(req.body)
    res.send(`You posted to the login page!\n`)
  })


module.exports = router