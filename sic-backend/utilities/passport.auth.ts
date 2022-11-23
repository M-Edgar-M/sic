import express, { Request, Response } from "express";
import { DONE, PASSPORTFIELDS } from "../models/passport.models";
import { USER } from "../models/User.model";
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const users = [
    { id: '2f24vvg', email: 'test@test.com', password: 'password' }
]

const passportFieds: PASSPORTFIELDS = {
    usernameField: 'email',
    passwordField: 'password'
}

const verifyCallback = (email: string, password: string, done: DONE) => {
    // here is where you make a call to the database
    // to find the user based on their username or email address
    // for now, we'll just pretend we found that it was users[0]
    const user = users[0]
    if (email === user.email && password === user.password) {
        console.log('Local strategy returned true')
        return done(null, user)
    }
}

const strategy = new LocalStrategy({
    passportFieds,
    verifyCallback
})

passport.use(passportFieds, strategy);