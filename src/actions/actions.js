import {CREATE_PRODUCT, ADD_SUGG, FILTER_CAFILTER_CATEGORY} from './types';

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

export const filterCategory= category => {
    return {
        type: ADD_SUGG,
        payload: category
    }
}