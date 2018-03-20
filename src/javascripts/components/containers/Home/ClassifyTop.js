import React,{Component} from 'react'
import {connect} from 'react-redux'
class ClassifyTop extends Component {
    constructor(props){
        super(props)
    }
    render(){
        
        let  {data,moduledata,classfiydown1,classfiydown2,classfiydown3}= this.props
        let array = []
        let array2 = []
        let array3 = []
        let array4 = []
        classfiydown1.forEach(item=>{
            array2.push(item.child[0].pic)
            
        })
        classfiydown2.forEach(item=>{
            array3.push(item.child[0].pic)
        })
        classfiydown3.forEach(item=>{
            array4.push(item.child[0].pic)
        })
        data.forEach(item => {
            item.data.forEach(item=>{
                array.push(item.child[0].pic)
                
            })
        })
        
        return(
            <div className="home-classfiy">
                {
                   array.map((item,i)=>{
                       return(
                           <img width="25%" src={item} key={i}/>
                       )
                   })

                }
                <div><img width="100%" src="https://s2.juancdn.com/jas/180319/e/b/5aaf74f0a9fcf87342295f3e_1080x312.gif"/></div>
                <div>
                {
                   moduledata.map((item,i)=>{
                       return (
                           <img width="50%" src={item} key={i}/>
                       )
                       console.log(item)
                   })
                    
                }
                 
                </div>
                    {
                        array3.map((item,i)=>{
                            return (
                                <img width="25%" src={item} key={i}/>
                            )
                        })
                    }
                    {
                    
                        array2.map((item,i)=>{
                            return (
                                <img width="25%" src={item} key={i}/>
                            )
                        })
                    }
                    {
                    
                    array4.map((item,i)=>{
                        return (
                            <img width="25%" src={item} key={i}/>
                        )
                    })
                  }
            
            </div>
        )
    }
}
ClassifyTop.defaultProps={
    data:'',
    moduledata:[],
    classfiydown1:[],
    classfiydown2:[],
    classfiydown3:[]
}
export default connect((state)=>{
    let moduledata = []
    let classfidata = []
    let classfiydown1 = []
    let classfiydown2 =[]
    let classfiydown3 =[]
    if(state.homeReducer.classifytop!=''){
        
        classfidata = state.homeReducer.classifytop
        classfiydown1=state.homeReducer.homedata.adsRes.block["0"].multi_block[2].data
        classfiydown2=state.homeReducer.homedata.adsRes.block['0'].multi_block[3].data
        classfiydown3=state.homeReducer.homedata.adsRes.block['0'].multi_block[4].data
        state.homeReducer.homedata.adsRes.block[0].multi_block[1].data.forEach(item=>{
            moduledata.push(item.child[0].pic)
        })
       
    }
    return{
        data:classfidata,
        moduledata:moduledata,
        classfiydown1:classfiydown1,
        classfiydown2:classfiydown2,
        classfiydown3:classfiydown3
    }
})(ClassifyTop)
