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
const registerController = {
    register: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        try {
            // Validating the user
            const registerSchema = joi_1.default.object({
                username: joi_1.default.string()
                    .alphanum()
                    .min(3)
                    .max(30)
                    .required(),
                email: joi_1.default.string()
                    .email().required(),
                password: joi_1.default.string()
                    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
                repeat_password: joi_1.default.ref('password'),
            });
            const { error } = registerSchema.validate(data);
            if (error) {
                return next(error);
            }
            //checking duplicate email in database
            const exist = yield Models_1.User.exists({ email: data.email });
            if (exist) {
                return next(customErrorHandler_1.default.Exists('Email Already taken'));
            }
            //hashing the password
            const hashPassword = yield bcrypt_1.default.hash(data.password, 10);
            //Saving user to database
            const user = yield Models_1.User.create(Object.assign(Object.assign({}, data), { password: hashPassword }));
            res.status(200).json(user);
        }
        catch (error) {
            return next(error);
        }
    })
};
exports.default = registerController;
