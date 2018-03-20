import React,{Component} from 'react'
import {connect} from 'react-redux'
class HomeContent extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let {data1,data2,data3}=this.props
        

        return(
            <div>
                {

                }
            </div>
        )
    }
}
export default connect(state=>
    
    {
        let data1 = []
        let data2 = []
        let data3 = []
        if(state.homeReducer.classifytop!=''){
            let a1 = state.homeReducer.homedata.adsRes.block[0].multi_block[5].data[0].child[0].pic
            let a2 = state.homeReducer.homedata.adsRes.block[0].multi_block[8].data[0].child[0].pic
            let a3 = state.homeReducer.homedata.adsRes.block[0].multi_block[11].data[0].child[0].pic
            let a4 = state.homeReducer.homedata.adsRes.block[0].multi_block[14].data[0].child[0].pic
            let a5 = state.homeReducer.homedata.adsRes.block[0].multi_block[17].data[0].child[0].pic
            let a6 = state.homeReducer.homedata.adsRes.block[0].multi_block[20].data[0].child[0].pic
            let b1 = state.homeReducer.homedata.adsRes.block[0].multi_block[6].data
            b1.forEach(item => {
                data2.push(item.child[0].pic)
            });
            let b2 = state.homeReducer.homedata.adsRes.block[0].multi_block[9].data
            b2.forEach(item => {
                data2.push(item.child[0].pic)
            });
            let b3 = state.homeReducer.homedata.adsRes.block[0].multi_block[12].data
            b3.forEach(item => {
                data2.push(item.child[0].pic)
            });
            let b4 = state.homeReducer.homedata.adsRes.block[0].multi_block[15].data
            b4.forEach(item => {
                data2.push(item.child[0].pic)
            });
            let b5 = state.homeReducer.homedata.adsRes.block[0].multi_block[18].data
            b5.forEach(item => {
                data2.push(item.child[0].pic)
            });
            let b6 = state.homeReducer.homedata.adsRes.block[0].multi_block[21].data
            b6.forEach(item => {
                data2.push(item.child[0].pic)
            });
            let c1 = state.homeReducer.homedata.adsRes.block[0].multi_block[7].data
            c1.forEach(item => {
                data3.push(item.child[0].pic)
            });
            let c2 = state.homeReducer.homedata.adsRes.block[0].multi_block[10].data
            c2.forEach(item => {
                data3.push(item.child[0].pic)
            });
            let c3 = state.homeReducer.homedata.adsRes.block[0].multi_block[13].data
            c3.forEach(item => {
                data3.push(item.child[0].pic)
            });
            let c4 = state.homeReducer.homedata.adsRes.block[0].multi_block[16].data
            c4.forEach(item => {
                data3.push(item.child[0].pic)
            });
            let c5 = state.homeReducer.homedata.adsRes.block[0].multi_block[19].data
            c5.forEach(item => {
                data3.push(item.child[0].pic)
            });
            let c6 = state.homeReducer.homedata.adsRes.block[0].multi_block[22].data
            c6.forEach(item => {
                data3.push(item.child[0].pic)
            });
           let data1 = [a1,a2,a3,a4,a5,a6]
            console.log(data3)
        }
        return{
            data1,
            data2,
            data3
        }
    }
,(dispatch)=>{

})(HomeContent)