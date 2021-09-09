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
const Models_1 = require("../Models");
const productController = {
    productUpload: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        try {
            const productSchema = joi_1.default.object({
                title: joi_1.default.string()
                    .min(3)
                    .max(30)
                    .required(),
                price: joi_1.default.number()
                    .required(),
                description: joi_1.default.string()
                    .min(3)
                    .max(30)
                    .required(),
                product_category: joi_1.default.string()
                    .min(3)
                    .max(30)
                    .required(),
            });
            const { error } = productSchema.validate(data);
            if (error) {
                //deleting uploaded pic
                // fs.unlink(`${appRoot}/${imagePath}`)
                return next(error);
            }
            console.log(req.body, req.files);
            const data2 = Object.assign(Object.assign({}, data), { images: req.files });
            console.log(data2);
            const document = yield Models_1.Product.create(Object.assign({}, data2), function (err, doc) {
                if (err) {
                    console.log(err);
                }
                res.status(200).json({ doc });
            });
        }
        catch (error) {
            return next(error);
        }
    })
};
exports.default = productController;
