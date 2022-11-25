import { Request, Response } from 'express';
import { USER } from '../../models/User.model';
const pool = require('../../db')

export const getUserByEmail = async (email: string) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user: USER = rows[0];
        if(!user) {
            throw new Error('User not found')
        } 
        return user;
    } catch (error) {
        console.error(error)
    }
}

export const getUserById = async (id: string) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        const user: USER = rows[0];
        if(!user) {
            throw new Error('User not found')
        }
        return user;
    } catch (error) {
        console.error(error)
    }
}