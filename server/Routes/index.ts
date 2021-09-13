import express from 'express';

import {registerController, loginController, productController, protectedRoute, productCategory} from '../Controllers';

import handlemultiPartData from '../Middlewares/fileUpload';

import authMiddleware from '../Middlewares/authMiddleware';

const route = express.Router();

route.post('/register', registerController.register);

route.post('/login', loginController.login);

route.post('/product', [handlemultiPartData], productController.productUpload);

route.post('/productCat', [handlemultiPartData], productCategory.productUpload);

route.get('/productCat', productCategory.productDownload);

route.get('/products/:id', productCategory.singleProduct);

route.get('/protectedRoute', [authMiddleware.auth], protectedRoute.protect);

export default route;