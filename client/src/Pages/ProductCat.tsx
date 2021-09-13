import ProductCategory from '../Component/ProductCategory'

import { useEffect, useState } from 'react';

import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';

import { setProducts } from '../Redux/Actions/productAction';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
    const products = useSelector((state) => state);
    
     const dispatch = useDispatch();

    const fetchProductcategory = async () => {
        try {
            const { data } = await axios.get(
                "/api/productCat"              
            );
            dispatch(setProducts(data.GetProduct));
            // console.log(data.GetProduct)
        } catch (error: any) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductcategory();
    }, [])
    console.log(products)
    return (
        <div>
            <ProductCategory />
        </div>
    )
}

export default Products
