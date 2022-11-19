import express, { Express } from "express";
const cors = require("cors");
const users = require('./user.ts')
const auth = require('./auth.ts')

module.exports = (app: Express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use(cors());
    app.use('/auth', auth);
    app.use('/user', users);
}