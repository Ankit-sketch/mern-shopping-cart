"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.User = void 0;
var userModel_1 = require("./userModel");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return __importDefault(userModel_1).default; } });
var productModel_1 = require("./productModel");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return __importDefault(productModel_1).default; } });
