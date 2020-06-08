import Vue from 'vue'
import Vuex from 'vuex'
import User from './common/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    User
  }
})
