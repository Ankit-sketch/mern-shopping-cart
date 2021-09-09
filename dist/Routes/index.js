"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controllers_1 = require("../Controllers");
const fileUpload_1 = __importDefault(require("../Middlewares/fileUpload"));
const route = express_1.default.Router();
route.post('/register', Controllers_1.registerController.register);
route.post('/login', Controllers_1.loginController.login);
route.post('/product', [fileUpload_1.default], Controllers_1.productController.productUpload);
exports.default = route;
