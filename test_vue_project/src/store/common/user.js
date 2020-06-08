import axios from "axios";
const loginApi=_import('getdata');
const _import=()=>require(`../../api/common/login`).default;

export default {
    namespaced: true,
    state: {
            
    },
    getters: {
    
        
    },
    mutations: {

    },
    actions:{
        dologin(context,payload){
            console.log(context,payload);
            // loginApi.getdata

            

        }
      
       
    }
}
