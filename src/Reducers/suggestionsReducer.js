import { ADD_SUGG } from '../actions/types';

    

const SuggReducer = (state = [], action) => {
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