import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/mixins/fetchData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    route:"",
    clientScreen:false,

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
    },
    CHANGE_ROUTE(state, payload){
      state.route = payload
    },
    CHANGE_CLIENT_SCREEN(state, payload){
      state.clientScreen = payload
    }
  },
  actions: {
    adicionarPrato(context, payload){
      context.commit("UPDATE_PRATOS", payload),
      api.post("/dados", payload)
    }
  },
 
    
})
