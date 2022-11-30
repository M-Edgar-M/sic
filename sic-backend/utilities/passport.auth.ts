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

passport.serializeUser(function (user: any, done: any) {
  done(null, user.id)
});

passport.deserializeUser(async function (user: any, done: any) {
 const u = await getUserById(user.id);
 console.log('🚀 ~ file: passport.auth.ts ~ line 30 ~ u', u)
 if(u) {
   done(null, user);
 } else {
   done(new Error);
 }
});

passport.use(new LocalStrategy(
    passportFieds,
    async function verify(email: string, password: string, done: DONE) {

    const user = await getUserByEmail(email);
    if (!user) { return done(null, false); }
    if (email === user.email && password === user.password) {
        return done(null, user);
    }
}));
