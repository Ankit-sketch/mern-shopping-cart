"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../Config/constants");
class tokenService {
    static sign(payload, expiry = '600000s', secret = `${constants_1.SECRET_KEY}`) {
        return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: expiry });
    }
    static verify(payload, secret = `${constants_1.SECRET_KEY}`) {
        return jsonwebtoken_1.default.verify(payload, secret);
    }
}
exports.default = tokenService;
