

import _state from './state'
import {GETBIGDATE} from './const'
const reducer =(state=_state,action)=>{
	      let newState=Object.assign({},state)
	      
	      switch(action.type){
	      
	      	case GETBIGDATE:newState.bigdate=action.bigdate ;break;
	      
	      	                
	      	default :break;
	      		      	
	      }
	      

	      return newState
	      
	      
	 
}


export default reducer;