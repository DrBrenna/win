import React,{Component} from 'react'
import {connect} from 'react-redux'
import Swiper from 'swiper'
class HomeBanner extends Component{
    constructor(props){
        super(props)
    }


    componentDidUpdate(){
        new Swiper('.home-banner',{
            autoplay:{
                stopOnLastSlide:true
            },
            pagination:{
                el:'.swiper-pagination'
            }
        })
    }
    render(){
        let {banners} = this.props
       
        return(
            <div className="swiper-container home-banner">

                <div className="swiper-wrapper">
                    {
                        banners.map(item=>{
                        return <div className="swiper-slide" key={item.id}><img width="100%" height="290px" src={item.pic}/></div>}
                    )}

                </div>
                
                <div className="swiper-pagination"></div>
            </div>
        )

    }
}
HomeBanner.defaultProps={
    banners:[]
}
export default connect(state=>{

    let homebanners = []
    if(state.homeReducer.homebanners!=''){
        homebanners=state.homeReducer.homebanners
       
    }
    return{
        banners:homebanners
    }
})(HomeBanner)
