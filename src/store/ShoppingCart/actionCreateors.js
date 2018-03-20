import axios from 'axios'
import {GETBIGDATE} from './const'
const actionCreators={
	
	getGou(){
		
		return (dispatch)=>{
			axios.get('http://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8_c3_l4_128_1456_1217_18_51_5_1371_1406_1391&app_name=zhe&catname=newest_zhe').then((res)=>
				     		 
			{ console.log(res.data)	
				dispatch({type:GETBIGDATE,bigdate:res.data})
			;
			}
			)
			
		}
		
	    
		
	}
}


export default actionCreators