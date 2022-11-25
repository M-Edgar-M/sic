import express, { Request, Response } from "express";
import { DONE, PASSPORTFIELDS } from "../models/passport.models";
import { USER } from "../models/User.model";
import { getUserByEmail, getUserById } from "./getters";
const passport = require('passport')
var LocalStrategy = require('passport-local');

const passportFieds: PASSPORTFIELDS = {
    usernameField: 'email',
    passwordField: 'password'
}

passport.use(new LocalStrategy({
    passportFieds
}, async function verify(email: string, password: string, done: DONE) {
    //TODO: passportFieds doesn't  work
    console.table({
        'email': email,
        'password': password
    });

    const user = await getUserByEmail(email);
    console.log('🚀 ~ file: passport.auth.ts ~ line 20 ~ user', user)
    if (!user) { return done(null, false); }
    if (email === user.email && password === user.password) {
        console.log('Local strategy returned true')
        return done(null, user);
    }
}));

// passport.use(new LocalStrategy(function verify(username: any, password: any, cb: any) {
//     console.log(888888888888888);

//     return cb(null, {user: 'edgar'});
//   }));

passport.serializeUser(function (user: any, cb: any) {
    console.log('Serialize: ', user);

    process.nextTick(function () {
        return cb(null, {
            id: user.id,
        });
    });
});

passport.deserializeUser(function (user: any, cb: any) {
    console.log('🚀 ~ file: passport.auth.ts ~ line 48 ~ passport.deserializeUser ~ user', user)
    console.log('DESERIALIZE');

    // TODO: this mathod doesn't run
    process.nextTick(function () {
        return cb(null, user);
    });
});