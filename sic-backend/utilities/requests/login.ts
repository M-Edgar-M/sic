import { Request, Response } from 'express';
// import { USER, USER_RESPONSE } from '../../models/User.model';
const pool = require('../../db')


export const login = (req: Request, res: Response) => {
    res.render('login');
  }