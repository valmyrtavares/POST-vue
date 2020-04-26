<template>
<section>
   <div>
    <h1>Cliente Ativos</h1>
      <p>nome do Cliente  {{ativo.name}}</p>
      <p>Numero da mesa  {{ativo.tableNumber}}</p>
      <p> numero de clientes  {{ativo.numCostumer}}</p>
      <!-- <router-link to="/clientes"><p>Pedidos  {{ativo.request}}</p></router-link> -->
      <form >
        <input type="number" v-model="prato">
          <select id="select" v-model="tipo" >
                <option name ="peixes" value="peixes">Peixe</option>
                 <option name ="bebida"  value="bebidas">Bebida</option>
                  <option name ="carne"  value="carnes">Carne</option>
                   <option name ="massa"  value="massas">Massa</option>
            </select>
        <input type="submit" value="busca" @click.prevent="buscaProduto">
      </form>
       

      <ul v-for="(prato, index) in Pedidos" :key="index">
        <li>Prato  {{prato.nome}}</li>
          <li>Valor  {{prato.preco}}</li>
      </ul>



     
   
   </div>

         
</section>
  
</template>

<script>
import {api} from "@/mixins/fetchData.js"
export default {
    name:"clinteAtivo",
     props:["ativo"],
     data(){
       return{
         tipo:"",
         prato:"",
         buscaPrato:null,
         Pedidos:[],
        //  pedido:{
        //    prato:"",
        //    tipo:""

        //  }
       }
     },
     computed:{
       url(){
         return `/${this.tipo}/${this.prato}`
       }
     },
     methods:{
       async buscaProduto(){
         
        await api.get(this.url).then(r => this.buscaPrato = r.data);
        await this.organizaProdutos(this.buscaPrato);
        await this. atualizandoCliente();
       },
       organizaProdutos(prod){
         this.Pedidos. unshift(prod)
       },
         atualizandoCliente(){
           api.put(`/costumer/${this.ativo.id}/`,this.Pedidos)
         }
     }


}
</script>

<style scoped>
input{
  max-width:100px;
  height: 40px;
}


</style>