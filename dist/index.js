"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes"));
const constants_1 = require("./Config/constants");
const errorHandler_1 = __importDefault(require("./Middlewares/errorHandler"));
const app = (0, express_1.default)();
// declare global {
//     namespace NodeJS {
//       interface Global {
//         appRoot: string;
//       }
//     }
//   }
// export default global.appRoot = path.resolve(__dirname);
//Middlewares
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//Routes
app.use('/api', Routes_1.default);
app.use([errorHandler_1.default]);
//Connection
require("./Config/db");
app.listen(constants_1.PORT, () => {
    console.log(`server is up at ${constants_1.PORT}`);
});
