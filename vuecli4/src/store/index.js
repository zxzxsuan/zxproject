import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  getters:{
    newCount(state){
      return state.count+100;
    }
  },
  mutations: {
    add(state){
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
