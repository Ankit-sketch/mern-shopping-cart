import { Request, Response, NextFunction } from 'express';

import Joi from 'joi';

import { User } from '../../Models';

import bcrypt from 'bcrypt';

import customErrorHandler from '../../Services/customErrorHandler';

const registerController = {
    register: async (req: Request, res: Response, next: NextFunction) => {
        const data: any = req.body;
        try {
            // Validating the user
            const registerSchema = Joi.object({
                username: Joi.string()
                    .alphanum()
                    .min(3)
                    .max(30)
                    .required(),
                email: Joi.string()
                    .email().required(),
                password: Joi.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
                repeat_password: Joi.ref('password'),
            })
            const { error } = registerSchema.validate(data);
            if (error) {
                return next(error);
            }

            //checking duplicate email in database
            const exist = await User.exists({ email: data.email })
            if (exist) {
                return next(customErrorHandler.Exists('Email Already taken'));
            }

            //hashing the password
            const hashPassword: string = await bcrypt.hash(data.password, 10);

            //Saving user to database
            const user = await User.create({
                ...data,
                password: hashPassword
            })
            res.status(200).json(user);
        }
        catch (error) {
            return next(error);
        }
    }
}

export default registerController;