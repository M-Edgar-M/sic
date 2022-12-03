import express, { Request, Response } from "express";
import { createNewUser, getUserByEmailClient, getUserByPublicIdClient } from "../utilities/requests/userRequests";
const Router = require('express-promise-router')
const pool = require('../db')

const router = new Router()

// GET USER BY PUBLICK ID
router.get('/:id', getUserByPublicIdClient)

// GET USER BY EMAAL
router.get('/', getUserByEmailClient)

// CREATE NEW USER /user/register
router.post("/register", createNewUser);

module.exports = router