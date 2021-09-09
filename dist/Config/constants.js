"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET_KEY = exports.DEV_MODE = exports.DB_URI = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
_a = process.env, exports.PORT = _a.PORT, exports.DB_URI = _a.DB_URI, exports.DEV_MODE = _a.DEV_MODE, exports.SECRET_KEY = _a.SECRET_KEY;
