import { Request, Response, NextFunction } from 'express';

import Joi from 'joi';

import { ProductCategory } from '../Models'

const productCategory = {
    productUpload: async (req: Request, res: Response, next: NextFunction) => {
        const data: any = req.body;

        try {
            const productSchema = Joi.object({              
                    category_name: Joi.string()
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
            const document = ProductCategory.create({
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
    },
    productDownload: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const GetProduct:any = await ProductCategory.find({});
            res.status(200).json({ GetProduct });
        } catch (error) {
            return next(error)
        }
    },
    singleProduct: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params;
            const result = await ProductCategory.findOne({
                _id : id
            }).populate('product');
            res.json({result})
        } catch (error) {
            return next(error)
        }
    }
}

export default productCategory;