import {CREATE_PRODUCT, ADD_SUGG} from './types';

export const addProduct = newProduct => {
    return {
        type: CREATE_PRODUCT,
        payload: newProduct
    }
}

export const addSugg = newSugg => {
    return {
        type: ADD_SUGG,
        payload: newSugg
    }
}