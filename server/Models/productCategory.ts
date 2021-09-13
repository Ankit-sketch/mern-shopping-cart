import mongoose from 'mongoose';

const productCategorySchema = new mongoose.Schema({
    title: {
        type: String,
    },
   category_name: {
        type: String,    
    },
    product: {
        type: mongoose.Schema.Types.ObjectId, ref : 'Product',
    },
    images: [{
        path: {
            type: String,
        },
    }]
}, {
    timestamps: true
})

export default mongoose.model('ProductCategory', productCategorySchema)