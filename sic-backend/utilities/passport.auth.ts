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

passport.serializeUser(function (user: USER, done: DONE) {
  done(null, user)
});

passport.deserializeUser(async function (user: any, done: DONE) {
 const u = await getUserById(user.id);
 if(u) {
   done(null, user);
 } else {
   done(new Error('User not found'), false);
 }
});

passport.use(new LocalStrategy(
    passportFieds,
    async function verify(email: string, password: string, done: DONE) {

    const user = await getUserByEmail(email);
    if (!user) { return done(new Error('User not found'), false); }
    if (email === user.email && password === user.password) {
        return done(null, user);
    }
}));
