import jokesReducer from "./jokesReducer";
import categoriesReducer from "./categoriesReducer";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    jokesReducer: jokesReducer,
    categoriesReducer: categoriesReducer
})

export default allReducers;