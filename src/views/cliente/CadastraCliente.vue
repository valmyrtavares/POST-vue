<template>
  <div class="transicao-geral">
    <h2>Novo Clientes</h2>
    <button @click="closeScreen" class="btn-close-screen">x</button>
    <form>
      <label for="name">Nome</label>
      <input type="text" name="nome" v-model="newCostumer.name" />
      <label for="numeroMesa">Numero da Mesa</label>
      <input type="number" name="numeroMesa" v-model="newCostumer.tableNumber" />
      <label for="numeroMesa">Pedido</label>
      <input type="number" name="numeroMesa" v-model="newCostumer.request" />
      <label for="numeroMesa">Quatidade de Pessoas por mesa</label>
      <input type="number" name="numeroMesa" v-model="newCostumer.numCostumer" />
      <button @click.prevent="createCostumer">Criar Cliente</button>
    </form>
  </div>
</template>
   
<script>
import { api } from "@/mixins/fetchData";
export default {
  name: "novoCliente",

  data() {
    return {
      newCostumer: {
        name: "",
        request: 0,
        tableNumber: 0,
        numCostumer: 0,
       
      },
       pedido:{
          id:"",
          name:"",
          table: "",
         pedidosFeitos:[]
       }
    };
  },
  methods: {
    async createCostumer() {
     this.validacaoCadastro();
     await api.post("/costumer", this.newCostumer);
      await this.createRequest()
      this.$router.push("/clientes");
    },
    closeScreen() {
      this.$router.push("/");
    },
    CheckUser(){
      if(this.$store.state.logado){
        this.$router.push("/cadastraCliente")
      }else{
        this.$router.push("/login")
      }
    },
    validacaoCadastro(){
      if(this.newCostumer.name===""){
        alert("O compo de nome não pode ficar em branco")
        throw true;}
          if(this.newCostumer.request===0){
        alert("O número da mesa não pode ser zero")
        throw true;}
          if(this.newCostumer.tableNumber===0){
        alert("O número do não pode ser zero")
        throw true;}
          if(this.newCostumer.numCostumer===0){
        alert("O número de clientes por mesa não pode ser igual a zero")
        throw true;}
      },
      preparaPedido(){
        this.pedido.id = this.newCostumer.request;
        this.pedido.name = this.newCostumer.name;
        this.pedido.table = this.newCostumer.tableNumber;
        
      },
      createRequest(){
        this.preparaPedido();
        api.post("/pedido", this.pedido)
      }
    },
  
  beforeRouteEnter:(to, from, next)=>{
    next(vm=>{
      vm.CheckUser()
    })
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}
div {
  width: 75%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border: solid 0.5px black;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
}

form {
  margin: 20px 100px;
}
button {
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 15px;
}
.btn-close-screen {
  font-size: 40px;
}
</style>


   

   
      







