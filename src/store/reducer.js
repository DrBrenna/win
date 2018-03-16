import {combineReducers} from 'redux'
import ListReducer from './list/reducer'



const reducer = combineReducers({
  goodlist: ListReducer
})

export default reducer