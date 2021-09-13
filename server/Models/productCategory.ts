import mongoose from 'mongoose';

const productCategorySchema = new mongoose.Schema({
   category_name: {
        type: String, 
        enum : ['mobile','electronics'],   
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId, ref : 'Product',
    }],
    image: {
            type: String,
    },
}, {
    timestamps: true
})

export default mongoose.model('ProductCategory', productCategorySchema)