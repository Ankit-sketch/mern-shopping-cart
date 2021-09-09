import express from "express";

import route from './Routes'

import { PORT } from './Config/constants'

import errorHandler from './Middlewares/errorHandler'

const app = express();

import path from 'path';


// declare global {
//     namespace NodeJS {
//       interface Global {
//         appRoot: string;
//       }
//     }
//   }
// export default global.appRoot = path.resolve(__dirname);

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use('/api', route);
app.use([errorHandler]);

//Connection
import './Config/db';

app.listen(PORT, () => {
    console.log(`server is up at ${PORT}`);
})