
import _state from './state'
import {
    GET_HOME_DATA
} from './const'

const reducer =(state=_state,action)=>{
    let new_state =Object.assign({},state)
    switch(action.type){
        case GET_HOME_DATA:
            new_state.homebanners =  action.homebanners;
            new_state.classifytop = action.classifytop;
            new_state.homedata=action.homedata
            // console.log(new_state.classifytop)
            break;
        default :break;
    }
    
    return new_state
}

export default reducer