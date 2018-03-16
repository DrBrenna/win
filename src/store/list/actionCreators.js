import axios from 'axios'

import {SET_GOOD_LIST} from './const'
export default {

    getgoodlist () {

        return (dispatch) => {
            axios.get('/jp/oldbringnew/invitation',{params:{
                platform:'wap'
            }}).then(res=>{
                // this.setState({banners:res.data.data.splice(8,5)})
                   console.log(res.data.data)
                dispatch({type:SET_GOOD_LIST,goodlist:res.data.data})
            })
        }

    }

}