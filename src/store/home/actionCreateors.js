import {
    GET_HOME_DATA
} from './const'

import axios from 'axios'

export default{
    getDate () {
        
        return (dispatch)=>{
            axios.get('/jp/api/getIndexNavSkip', {
                params: {
                    page:1,
                    zy_ids:'p8_c4_l4_1456_1220_1186_1406_1184_1217_1371_5_128_106_51_18_1391',
                    app_name:'zhe',
                    catname:'newest_zhe'
                }
              }).then((res)=> {
                
                let homedata = res.data
                let classifytop =res.data.adsRes.block["0"].multi_block.splice(0,2)
                let homebanners = res.data.adsRes.slide_ads.config.slide
                
                dispatch({type:GET_HOME_DATA,homedata,homebanners,classifytop})
              })

        }
    }
}