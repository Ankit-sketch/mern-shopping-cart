import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'

import fresh from '../assets/images/Fresh.jpg';

import electronic from '../assets/images/Electronic.jpg';

import mobile from '../assets/images/Mobile.jpg';

import fashion from '../assets/images/Fashion.jpg';

const ProductCategory = () => {
    const products: any = useSelector((state) => state);
    console.log("products", products.allproducts.product);
    const allProducts = products.allproducts.product
    const mapped = allProducts.map((product: any) => {
        let { _id, category_name, images } = product;
        return (
            <Link to = {`/products/${_id}`}>
            <div className="display ">
                <div className="list key={_id}">
                    <img src={images} />
                    <h6>{category_name}</h6>
                </div>
            </div>
            </Link>
        )
    })
    return (
        // <Link to = {`/products/${}`}>
            <div className="category-wrapper">
                <div className="category">
                    <div className="category-card">
                        <h2>Shop by Category</h2>
                        <div className="lists">
                            {mapped}
                        </div>
                    </div>
                </div>
            </div>
        // </Link>
    )
}

export default ProductCategory
