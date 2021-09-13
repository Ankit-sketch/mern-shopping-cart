import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,     
    },
    description: {
        type: String, 
    },
    product_category: [{
        type: mongoose.Types.ObjectId, ref : 'ProductCategory'
    }],
    images: [{
        path: {
            type: String,
        },
    }] 
}, {
    timestamps: true
})

export default mongoose.model('Product', productSchema)