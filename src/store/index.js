import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/mixins/fetchData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    valorTotal:0,
    route:"",
    menu:false,
    clientScreen:false,
    usuarioLogado:true,
    logado:"",

    pratoEspeciais:{
      nome:"",
      preco:0,
      caracteristicas:"",
      descricao:"",
      imagem:""
}
  },
  mutations: {
    ATUALIZANDO_TOTALBILL(state, payload){
      state.valorTotal = payload
    },
    LOGAR_USUARIO(state, payload){
      state.logado = payload
    },
    UPDATE_PRATOS(state, payload){
      state.pratoEspeciais = payload
    },
    CHANGE_ROUTE(state, payload){
      state.route = payload
    },
    CHANGE_CLIENT_SCREEN(state, payload){
      state.clientScreen = payload
    },
    CLOSE_MENU(state, payload){
      state.menu = payload
    },
    OPEN_MENU(state, payload){
      state.menu = payload
    }
  },
  actions: {
    adicionarPrato(context, payload){
      context.commit("UPDATE_PRATOS", payload),
      api.post("/dados", payload)
    }
  },
 
    
})
