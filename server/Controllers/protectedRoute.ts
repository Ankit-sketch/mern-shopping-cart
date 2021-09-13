import { Request, Response, NextFunction } from 'express';

import { User } from '../Models';

const protectedRoute = {
    protect: async (req: Request, res: Response, next: NextFunction) => {
        // console.log("user",req.headers._id)
        const user = req.headers._id
        try {
            const exist = await User.findOne({
                _id : user
            })
            if(!exist){
                console.log('not valid');
            }
        } catch (error) {
            return next(error);
        }
    }}

    export default protectedRoute;