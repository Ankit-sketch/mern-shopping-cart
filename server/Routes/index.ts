import express from 'express';

import {registerController, loginController, productController} from '../Controllers';

import handlemultiPartData from '../Middlewares/fileUpload';

const route = express.Router();

route.post('/register', registerController.register);

route.post('/login', loginController.login);

route.post('/product', [handlemultiPartData], productController.productUpload);

export default route;