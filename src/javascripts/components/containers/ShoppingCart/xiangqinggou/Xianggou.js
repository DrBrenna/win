 import React,{Component} from "react"
 import './xianggou.css'
 import Swiper from '../../../../../../node_modules/swiper/dist/js/swiper.min.js'
 import '../../../../../../node_modules/swiper/dist/css/swiper.min.css'
 import {connect} from 'react-redux'
 import actionCreators from '../../../../../store/ShoppingCart/actionCreateors'
 import axios from 'axios'
 import {bindActionCreators} from 'redux'
 import HuiYuanTop from './HuiYuanTop'
 class Xianggou extends Component {
 	constructor(props){
 		super(props)
 		
 	}
 	componentWillMount(){
       this.props.getBigdata.getGou()
 	}
 	
 	
 	componentDidMount(){
 	
  
 	}
 	
 	
 	
 	render(){
 
 		return(
 			<div className="xiangGou-shopping">
 			
 		      <HuiYuanTop/>
           
           
                    
 			   
 			
 			</div>
 		)
 	}
 }

let mapStateToProps = (state)=>{
 		return {
 			firstOne:state.bigdate
 		}
 	}
 let mapDispatchToProps = (dispatch)=>{
 		
 	 return {
 	 	
 	 		getBigdata:bindActionCreators(actionCreators,dispatch)
 	 	
 	 }
 	}
export default connect(mapStateToProps,mapDispatchToProps)(Xianggou)