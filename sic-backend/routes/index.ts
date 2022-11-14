import express, { Express } from "express";
const cors = require("cors");
const users = require('./user.ts')

module.exports = (app: Express) => {
    app.use(express.json());
    app.use(cors());
    app.use('/user', users)
}