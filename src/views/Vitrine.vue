<template>
  <section>
    <button @click="showCostumer" >Adicionar Cliente </button>
    

    <router-link :to="{name:'massa'}">Massas</router-link>
    <router-link :to="{name:'carnes'}">Carnes</router-link>
    <router-link :to="{name:'bebidas'}">Bebidas</router-link>
    <router-link :to="{name:'peixes'}" >Peixes</router-link> 
    
    <NovoCliente v-if="$store.state.clientScreen"></NovoCliente>
    <router-link to="/clientes">Clientes Ativos</router-link>
  
        <router-view></router-view>
        <!-- <ul v-for="(costumer, index) in clientsActive" :key="index">
         <router-link :to="{name:'clienteAtivo', params:{clienteAtivo: costumer}}">
            <li>Nome do Cliente: {{costumer.name}}</li> 
            </router-link>
             <li> Número da Mesa:  Mesa {{costumer.tableNumber}}</li>
               <li> Quantidade de Clientes: {{costumer.tableNumber}} Pessoas</li>
              <li> Pedidos {{costumer.request}}</li>
        </ul> -->
  </section>
</template>
   
      
      
      
   
    

<script>
import NovoCliente from "@/views/cliente/CadastraCliente.vue"
import { api } from "@/mixins/fetchData.js"
export default {
  name: "Vitrine",
  components: {
    NovoCliente,
  },
  data() {
    return {
      Pratos: null,
      clientsActive:null
    }
  },
  methods: {
    showCostumer(){
      this.$store.commit("CHANGE_CLIENT_SCREEN", true)
    },
    getCostumers(){
      api.get("/costumer")
      .then(r =>
       {this.clientsActive = r.data})
    },
  },
  created(){
    this.getCostumers()
  }
 
};
</script>

     
    




     
    

<style> 

</style>