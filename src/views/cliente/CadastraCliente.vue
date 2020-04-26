<template>
  <div>
      <h1>Novo Clientes</h1>
      <form >
        <button class="btn-close-screen">x</button>
        <label for="name">Nome </label>
      <input type="text" name="nome" v-model="newCostumer.name">
       <label for="numeroMesa">Numero da Mesa</label>
      <input type="number" name="numeroMesa" v-model="newCostumer.tableNumber">
      <label for="numeroMesa">Pedido</label>
      <input type="number" name="numeroMesa" v-model="newCostumer.request">
       <label for="numeroMesa">Quatidade de Pessoas por mesa</label>
      <input type="number" name="numeroMesa" v-model="newCostumer.numCostumer">
      <button @click.prevent="createCostumer">criar Cliente</button>


      </form>
  </div>
</template>

<script>
import {api} from '@/mixins/fetchData'
export default {
   name:"novoCliente",
 
   data(){
     return{
       newCostumer:{
         name:"",
         request:0,
         tableNumber:0,
         numCostumer: 0
       }
     }
   },
   methods:{
     createCostumer(){
       api.post("/costumer", this.newCostumer)
        this.closeScreen()
    },
    closeScreen(){
      this.$store.commit("CHANGE_CLIENT_SCREEN", false)
    }
   
  }
      




}
</script>

<style scoped>
div {
  width: 75%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border: solid 0.5px black;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
}
.btn-close-screen{
  position: relative;
    top: -77px;
    left: 532px;
}
 



</style>