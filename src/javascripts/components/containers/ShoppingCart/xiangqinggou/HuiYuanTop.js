import React,{Component} from 'react'
import './huiyuantop.css'
import {Link} from 'react-router'
import {connect} from 'react'
class HuiYuanTop extends Component{
	constructor(props){
		super(props)
		this.ToBack=this.ToBack.bind(this);
	}
	
	ToBack(){
		this.props.history.go()
	}
	render(){
		
		return (
			<div className="huiyuan-top">
			 
			     <div className="huiyuan-back" onClick={this.ToBack}> >  </div>
			   
			      <div className="huiyuanshangcheng">会员商城</div>
			
			</div>
		)
	}
}
export default connect()(HuiYuanTop)