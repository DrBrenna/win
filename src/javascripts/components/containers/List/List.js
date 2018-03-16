import './List.scss'
import './list.css'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/list/actionCreators'
class List extends Component {
    componentWillMount(){
       this.props.actions.getgoodlist()
    }
    render () {
        console.log(this.props.goodlist.goodlist)
        let {goodlist} = this.props.goodlist
        console.log(goodlist)
       return(
          <div className="app-list">
             <div className='app-list-box'>
                   
                   <div className="topbox">
                   <img src="https://goods6.juancdn.com/jas/171117/a/7/5a0e5f79a9fcf8b04d1a55e4_1080x418.png?imageMogr2/quality/85!/format/png" alt=""/>
                   <span>- 邀请新成员入团，团满立即入团 -</span>
                   </div>
                   <div className='good-list'>
                        {
                            goodlist ? goodlist.map(item=> <div key={item.goods_id} className="goodbox">
                           <img src={item.img_url} alt=""/>
                           <div className='rbox'>
                                <span className='.desc'>{item.title}</span>
                                <span className="group">{item.num}</span>
                                <div className="bottom">
                                <span className='newprice'>{item.cprice}</span>
                                <span className="lowprice">{item.oprice}</span>
                                <a className='buy' href="#">{item.btnName}</a>
                                </div>
                           </div>
                       </div>):''
                        }
                      
                   </div>
             </div>
          </div> 
       ) 
    }
}


export default connect(state=>state,(dispatch)=>{
    return{
         actions:bindActionCreators(actionCreators,dispatch)
    }
})(List) 
