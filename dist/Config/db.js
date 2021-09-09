"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("./constants");
mongoose_1.default.connect(`${constants_1.DB_URI}`).then(() => console.log('database connected...')).catch((error => {
    console.log(error);
}));
