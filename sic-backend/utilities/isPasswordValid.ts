import createHttpError from "http-errors";
import bcrypt from "bcrypt";

export const isPasswordValid = async (password: string, hash: string): Promise<boolean> => {
    try {
        return bcrypt.compare(password, hash)   
    } catch (error) {
        throw createHttpError(401, { expose: false, message: 'Unauthorized user' })
    }
}