import { ActionTypes } from "../Constants/actionTypes";

export const setProducts = (products: any) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }
}

export const selectProducts = (products: any) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}

export const removeProducts = (products: any) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload: products
    }
}