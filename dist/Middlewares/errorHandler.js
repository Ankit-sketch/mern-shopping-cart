"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../Config/constants");
const joi_1 = require("joi");
const customErrorHandler_1 = __importDefault(require("../Services/customErrorHandler"));
const errorHandler = (err, req, res, next) => {
    let statuscode = 500;
    let data = Object.assign({ message: 'internal server error' }, (constants_1.DEV_MODE === 'true' && { original_error: err }));
    if (err instanceof joi_1.ValidationError) {
        statuscode = 400;
        data = {
            message: err.message,
        };
    }
    if (err instanceof customErrorHandler_1.default) {
        statuscode = err.status;
        data = {
            message: err.message,
        };
    }
    return res.status(statuscode).json(data);
};
exports.default = errorHandler;
