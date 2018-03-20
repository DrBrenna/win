import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk' 
console.log(456)
const store =createStore(reducer,applyMiddleware(thunk))

export default store