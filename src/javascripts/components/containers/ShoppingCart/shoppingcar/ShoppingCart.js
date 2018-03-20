
import React,{Component} from 'react'
import  {Link} from 'react-router'
import axios from 'axios'
import './ShoppingCart.css'
class ShoppingCart extends Component {
	
	getFooterInfo(){
		axios.get('/jp/cart?select=4_1').then((res)=>{
			
		})
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		this.getFooterInfo();
	}
    render () {
       return(
          <div className="app-list main">
          	
			     <nav className="app-car-top">          	
			          	<span className="app-car-shopping">购物车</span>
			          	<span className="app-car-bian">编辑</span>
			     </nav>
			     
			     
			     <div className="app-bg-err">
			     
			            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" alt=""/>
			            
			     </div>
			     <div>
			                <p className="app-like-home">喜欢的就带回家吧</p>
			      </div>
			      <Link to='/xianggou' className="tui-jian-info">
				      <div className="tui-jian">
	                   今日推荐
	                   </div>
                   </Link>
                 
          </div>
       ) 
    }
}

export default ShoppingCart