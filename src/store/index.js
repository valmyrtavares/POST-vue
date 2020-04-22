import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/mixins/fetchData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pratoEspeciais:{
      nome:"",
      preco:0,
      caracteristicas:"",
      descricao:"",
      imagem:""
}
  },
  mutations: {
    UPDATE_PRATOS(state, payload){
      state.pratoEspeciais = payload
    }
  },
  actions: {
    adicionarPrato(context, payload){
      context.commit("UPDATE_PRATOS", payload),
      api.post("/dados", payload)
    }
  },
 
    
})
