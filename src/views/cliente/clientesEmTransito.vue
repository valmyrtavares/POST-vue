<template>
  <section>
    <div class="transicao-geral" >
     
      <button @click="irPaginaCadastrarCliente" class="btn-standart">Cadastre um novo Cliente</button>
      <ul v-for="(costumer, index) in AllCostumers" :key="index">
        <router-link :to="{name:'clienteAtivo',params:{ativo:costumer.id}}">
          <li>Nome do Cliente: <span>{{costumer.name}}</span></li>
        </router-link>
        <li>Número da Mesa: Mesa {{costumer.tableNumber}}</li>
        <li>Quantidade de Clientes: {{costumer.numCostumer}} Pessoas</li>
        <li>Pedidos {{costumer.request}}</li>
        <button class="btn-close-screen" @click="deleteCostumer(costumer.id, costumer.name)">x</button>
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
    async deleteCostumer(id, nome) {
      const confirmar = window.confirm(`Deseja realmente excluir o Sr/Sra ${nome}`)
      if(confirmar)
      await api.delete(`/costumer/${id}`);
      await this.getCostumers();
    },
    irPaginaCadastrarCliente(){
      this.$router.push("/cadastraCliente")
    }
  },
 
  beforeRouteEnter:((to, from, next)=>{
    next(vm =>{
      vm.getCostumers()
    })
  }),
  created() {
    this.getCostumers();
  }
};
</script>
     


<style scoped>

section{
  display:grid;
  grid-template-columns: 1fr 1fr;
}
.btn-standart{
  margin:10px 115px;
}
ul{
  display:flex;
  flex-direction:column;
  position:relative;
   background:rgba(0,0,0,.3);
  width:60%;
  margin:30px auto;
  padding:30px;
  border-radius:10px;
  border:solid 1px black
}

button {
  background: none;
  font-size: 25px;
}
li{
 margin: 10px 10px
}
span{
  font-size:22px;
  font-family: monospace;
}
</style>