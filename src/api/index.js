import $axios from './axios'

export const getHomeCasual = ()=>$axios(`http://localhost:8080/userInfo`);

