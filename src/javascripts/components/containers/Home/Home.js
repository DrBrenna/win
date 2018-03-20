import './Home.scss'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import actionCreators from '../../../../store/home/actionCreateors'
import {bindActionCreators} from 'redux'
import HomeBanner from './HomeBanner'
import Classify from './ClassifyTop'
import HomeContent from './HomeContent'
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            isNav:false
        }
    }
    componentWillMount(){
        this.props.actions.getDate()
        this.setState({isNav:true})
    }
    componentWillReceiveProps(props){
        
    }
    shouldComponentUpdate(props){
        
    }
    componentWillUpdate(props){

    }

    render () {
       return(
          <div className="app-home">
                <header>
                    { <img className="sc-ibxdXY fOzlGi" src="//jp.juancdn.com/jpwebapp/images/go_load_new.png"/> 
                }
                </header>
                <div className="app-body">
                    <div className="search-box">
                        <div className="search">
                            <a className="sc-hwwEjo cDNDuJ" href="#">
                                <span className="search-icon">
                                    <i className="fa fa-search"></i>
                                </span>
                                <span className="search-img">
                                    <img className="sc-kfGgVZ dxtDGP" src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png"/>
                                </span>
                                <span>搜索</span>
                            </a>
                            <a className="sc-kPVwWT jktfkc" href="#">
                                <img className="sc-kfGgVZ dxtDGP" src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png"/>
                            </a>
                        </div>
                    </div>
                    {
                        this.state.isNav?<HomeBanner/>:''
                    }
                    <Classify/>
                    <HomeContent/>
                </div>
                
          </div> 
       ) 
    }
}

export default connect(state=>
    {
        return{
            homedata:state.homedata
        }
    }
,(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(Home)

// export default Home
