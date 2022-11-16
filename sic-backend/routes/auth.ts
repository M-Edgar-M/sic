import express, { Request, Response } from "express";
import { login } from "../utilities/requests/login";
const Router = require('express-promise-router')
const pool = require('../db')

const router = new Router()


router.get('/login', login);

module.exports = router