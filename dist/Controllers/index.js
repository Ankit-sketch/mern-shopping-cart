"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = exports.loginController = exports.registerController = void 0;
var registerController_1 = require("./auth/registerController");
Object.defineProperty(exports, "registerController", { enumerable: true, get: function () { return __importDefault(registerController_1).default; } });
var loginController_1 = require("./auth/loginController");
Object.defineProperty(exports, "loginController", { enumerable: true, get: function () { return __importDefault(loginController_1).default; } });
var productController_1 = require("./productController");
Object.defineProperty(exports, "productController", { enumerable: true, get: function () { return __importDefault(productController_1).default; } });
