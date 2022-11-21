import express, { Request, Response } from "express";
import { USER } from "../models/User.model";
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const users = [
    { id: '2f24vvg', email: 'test@test.com', password: 'password' }
]

interface DONE {
    (err: Error | null, user: USER | boolean | any): void;
}


passport.use(new LocalStrategy(
    { usernameField: 'email' },
    (email: string, password: string, done: DONE) => { //TODO: remove any type
        console.log('Inside local strategy callback')
        // here is where you make a call to the database
        // to find the user based on their username or email address
        // for now, we'll just pretend we found that it was users[0]
        const user = users[0]
        if (email === user.email && password === user.password) {
            console.log('Local strategy returned true')
            return done(null, user)
        }
    }
));

passport.serializeUser((user: USER | any, done: DONE) => {
    console.log('Inside serializeUser callback. User id is save to the session file store here')
    done(null, user.id);
});

passport.deserializeUser((id: string, done: DONE) => {
    console.log('Inside deserializeUser callback')
    console.log(`The user id passport saved in the session file store is: ${id}`)
    const user = users[0].id === id ? users[0] : false; 
    done(null, user);
  });