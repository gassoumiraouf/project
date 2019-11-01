import { ADD_SUGG } from '../actions/types';
let initialState = [
    {
        id: Math.round(Math.random() * 10000),
        productId: Math.round(Math.random() * 10000),
        name: "Moez",
    }
]

const SuggReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_SUGG:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export default SuggReducer