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
    },
    reduce(state){
      state.count--;
    }
  },
  actions: {//acttion 提交的是Mutation，而不是直接变更状态
    addAction({commit}){
      setTimeout(() => {
         commit('add')
      }, 1000);
     
    }
  },
  modules: {
  }
})
