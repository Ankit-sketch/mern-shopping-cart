import { Request, Response, NextFunction } from 'express';

import Joi, { any } from 'joi';

import customErrorHandler from '../Services/customErrorHandler';

import fs from 'fs';

import { Product } from '../Models'

const productController = {
    productUpload: async (req: Request, res: Response, next: NextFunction) => {
        const data: any = req.body;

        try {
            const productSchema = Joi.object({
                title: Joi.string()
                    .min(3)
                    .max(30)
                    .required(),
                price: Joi.number()
                    .required(),
                description: Joi.string()
                    .min(3)
                    .max(30)
                    .required(),
                product_category: Joi.string()
                    .min(3)
                    .max(30)
                    .required(),
            })
            const { error } = productSchema.validate(data);
            if (error) {
                //deleting uploaded pic
                // fs.unlink(`${appRoot}/${imagePath}`)
                return next(error)
            }
            console.log(req.body, req.files)
            interface set {
                data2: {
                    images: any
                }
            }
            const data2: set = {
                ...data,
                images: req.files
            }
            console.log(data2)
            const document = Product.create({
                ...data2,
            }, function (err, doc) {
                if (err) {
                    console.log(err)
                }
                res.status(200).json({ doc });
            })
        } catch (error) {
            return next(error)
        }
    }
}

export default productController;