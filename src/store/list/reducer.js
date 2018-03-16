
import _state from './state'
import {SET_GOOD_LIST} from './const'
const reducer = (state=_state,action)=>{

    let new_state = Object.assign({},state)

    switch (action.type){
       case SET_GOOD_LIST:
        new_state.goodlist = action.goodlist;break;
       default:break;

    }

   return new_state
}

export default reducer