import { Request, Response } from 'express';
import createHttpError from 'http-errors';
import { USER_RESPONSE } from '../../models/User.model';
const pool = require('../../db')

export const getUserByEmailClient = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [body.email]);
        const { first_name, surname, email, created_on, last_login, public_id } = rows[0]
        const userResponse: USER_RESPONSE = { first_name, surname, email, created_on, last_login, public_id };
        return res.status(200).send(userResponse)
    } catch (error) {
        console.error(error)
        throw createHttpError(400, { expose: false, message: error })
    }
}

export const getUserByPublicIdClient = async (req: Request, res: Response) => {
    try {
        const { id: userId } = req.params
        const { rows } = await pool.query('SELECT * FROM users WHERE public_id = $1', [userId]);
        const { first_name, surname, email, created_on, last_login, public_id } = rows[0]
        const userResponse: USER_RESPONSE = { first_name, surname, email, created_on, last_login, public_id };
        return res.status(200).send(userResponse)
    } catch (error) {
        console.error(error)
        throw createHttpError(400, { expose: false, message: error })
    }
}

export const createNewUser = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const { rows } = await pool.query(
            "INSERT INTO users (first_name, surname, password, email) VALUES ($1,$2,$3,$4) RETURNING *",
            [body.first_name, body.surname, body.password, body.email]
        );
        const { first_name, surname, email, created_on, public_id } = rows[0]
        const userResponse: USER_RESPONSE = { first_name, surname, email, created_on, public_id };
        res.status(200).send(userResponse);
    } catch (error) {
        console.error(error);
        throw createHttpError(400, { expose: false, message: error })
    }
}