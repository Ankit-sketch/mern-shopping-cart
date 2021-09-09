import { Request, Response, NextFunction } from 'express';

import Joi from 'joi';

import { User } from '../../Models';

import bcrypt from 'bcrypt';

import customErrorHandler from '../../Services/customErrorHandler';

import tokenService from '../../Services/tokenService'

const loginController = {
    login: async (req: Request, res: Response, next: NextFunction) => {
        const data: any = req.body;
        try {
            // Validating the user
            const loginSchema = Joi.object({
                email: Joi.string()
                    .email().required(),
                password: Joi.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            })
            const { error } = loginSchema.validate(data);
            if (error) {
                return next(error);
            }

            // Checking if user exists in database
            const user: any = await User.findOne({ email: data.email });
            if (!user) {
                return next(customErrorHandler.wrongCredentials("email or password is wrong"));
            }

            // comparing passwords
            const match = await bcrypt.compare(data.password, user.password);
            if (!match) {
                return next(customErrorHandler.wrongCredentials("email or password is wrong"));
            }

            // Generating Access Token
            const access_token = tokenService.sign({ id: user.id, role: user.role })

            return res.status(200).json({ access_token });
        } catch (error) {
            return next(error);
        }
    }
}

export default loginController;