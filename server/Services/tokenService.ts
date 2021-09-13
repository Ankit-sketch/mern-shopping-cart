import jwt from "jsonwebtoken";

import { SECRET_KEY } from '../Config/constants';

class tokenService {
    static sign(payload:any, expiry: string = '600000s', secret: string = `${SECRET_KEY}`) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }
    static verify(payload :string, secret = `${SECRET_KEY}`){
        return jwt.verify(payload, secret);
     }
}

export default tokenService;