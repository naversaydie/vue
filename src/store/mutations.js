import {HOME_CASUAL} from './mutation-types'

const mutations = {
    [HOME_CASUAL](state,{homecasual}){
        state.homecasual =  homecasual;
        console.log(homecasual)


    }


}

export default mutations
