import express, { Request, Response } from "express";
import { createNewUser, getUserByEmail, getUserByPublicId } from "../utilities/requests/userRequests";
const Router = require('express-promise-router')
const pool = require('../db')

const router = new Router()

// GET USER BY PUBLICK ID
router.get('/:id', getUserByPublicId)

// GET USER BY EMAAL
router.get('/', getUserByEmail)

// CREATE NEW USER
router.post("/create", createNewUser);

module.exports = router