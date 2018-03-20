
import React,{Component} from 'react'
import './footer.css'

import axios from 'axios'


class Footer extends Component {
	constructor(props){
		super(props)
		this.state={
             FooterInfo:[]
		}
		this.getIndexFooterInfo=this.getIndexFooterInfo.bind(this);
		this.changeBgIcon=this.changeBgIcon.bind(this)
	}
	getIndexFooterInfo(){
			axios.get('/jp/index/getMenu?select=4_1&zhouyi_ids=c3_l4_128_1456_1217_18_51_5_1371_1406_1391').then((res)=>{ 
				return this.setState({FooterInfo:res.data.menu_list})
				})
		
	}
	
	changeBgIcon(){
		console.log(123)
	}
	componentWillMount(){
		
		
			this.getIndexFooterInfo();
			
		
		
	}
	
	
    render () {
    	
  
      let {FooterInfo} =this.state
         console.log(this)
       return(
          <div className="app-list-footer">
                 {
                         FooterInfo.map((item,i)=>{
                 	  return   <div className="app-list-footer-info" onClick={this.changeBgIcon} key={i}> 
                 	                  <div  className="app-info-content">
                 	                           <img src={FooterInfo[i].bg_icon} className="icon-bg-img" alt=""/>
                 	                           <span className="footer-info-title">{FooterInfo[i].title}</span>
                 	                  </div>
                 	             </div>
                 })
                 
                 }	
          
          </div>
       ) 
    }
    
}

export default Footer