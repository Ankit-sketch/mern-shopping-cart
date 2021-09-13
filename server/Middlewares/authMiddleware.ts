import { Request, Response, NextFunction } from 'express';

import customErrorHandler from '../Services/customErrorHandler';

import tokenService from '../Services/tokenService';

const authMiddleware = {
    auth: async (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(customErrorHandler.unauthorised('unauthorised'));
        }
        const token = authHeader.split(' ')[1];
        console.log(token)
        try {
            const data: any = tokenService.verify(token)

            const { _id, role } = data;
            const user = {
                _id,
                role
            }

            //sending user to the controller via headers
           req.headers = user;
            next();

        } catch (error) {
            return next(customErrorHandler.unauthorised('unauthorised'));
        }
    }
}

export default authMiddleware;