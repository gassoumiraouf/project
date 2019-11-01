import {combineReducers} from 'redux';
import productReducer from './productReducer'
import SuggReducer from './suggestionsReducer'
export default combineReducers ({product:productReducer, suggestions: SuggReducer})