import dotenv from 'dotenv';

dotenv.config();

export const{PORT, DB_URI, DEV_MODE, SECRET_KEY } = process.env;