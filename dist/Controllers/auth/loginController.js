"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const Models_1 = require("../../Models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const customErrorHandler_1 = __importDefault(require("../../Services/customErrorHandler"));
const tokenService_1 = __importDefault(require("../../Services/tokenService"));
const loginController = {
    login: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        try {
            // Validating the user
            const loginSchema = joi_1.default.object({
                email: joi_1.default.string()
                    .email().required(),
                password: joi_1.default.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            });
            const { error } = loginSchema.validate(data);
            if (error) {
                return next(error);
            }
            // Checking if user exists in database
            const user = yield Models_1.User.findOne({ email: data.email });
            if (!user) {
                return next(customErrorHandler_1.default.wrongCredentials("email or password is wrong"));
            }
            // comparing passwords
            const match = yield bcrypt_1.default.compare(data.password, user.password);
            if (!match) {
                return next(customErrorHandler_1.default.wrongCredentials("email or password is wrong"));
            }
            // Generating Access Token
            const access_token = tokenService_1.default.sign({ id: user.id, role: user.role });
            return res.status(200).json({ access_token });
        }
        catch (error) {
            return next(error);
        }
    })
};
exports.default = loginController;
