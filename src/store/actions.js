//更新状态
import {getHomeCasual} from '@/api'
import {HOME_CASUAL} from './mutation-types'



const actions ={
    //获取首页轮播
    async reqHomeCasual({commit}){
        const  result = await getHomeCasual();
        commit(HOME_CASUAL,{homecasual:result.data.list})
    }

};

export default actions
