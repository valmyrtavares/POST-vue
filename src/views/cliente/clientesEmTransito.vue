<template>
  <section>
      <div>
    <h1 >Clientes em transito</h1>
    <ul v-for="(costumer, index) in AllCostumers" :key="index">
      <router-link :to="{name:'clienteAtivo',params:{ativo: costumer}}">
        <li>Nome do Cliente: {{costumer.name}}</li>
      </router-link>
      <li>Número da Mesa: Mesa {{costumer.tableNumber}}</li>
      <li>Quantidade de Clientes: {{costumer.tableNumber}} Pessoas</li>
      <li>Pedidos {{costumer.request}}</li>
      <button @click="deleteCostumer(costumer.id)">x</button>
    </ul>

      </div>
    <router-view></router-view>
  </section>
</template>

<script>
import { api } from "@/mixins/fetchData.js";
export default {
  name: "clientesEmTransito",
  data() {
    return {
      AllCostumers: null
    };
  },
  methods: {
    getCostumers() {
      console.log("Foi");
      api.get("/costumer").then(r => {
        this.AllCostumers = r.data;
      });
    },
    deleteCostumer(id){
       api.delete(`/costumer/${id}`)
        this.getCostumers() 
    }
  },
  created() {
    this.getCostumers();
  }
};
</script>

<style scoped>
section{
    display:grid;
    grid-template-columns: 1fr 1fr
}
button{
    background:none;
    font-size:25px;
   
}

</style>