<template>
<section>
   <div>
    <h1>Cliente Ativo</h1>
      <p>nome do Cliente  {{ativo.name}}</p>
      <p>Numero da mesa  {{ativo.tableNumber}}</p>
      <p> numero de clientes  {{ativo.numCostumer}}</p>
      <router-link to="/clientes"><p>Pedidos  {{ativo.request}}</p></router-link>
   </div>

         
</section>
  
</template>

<script>
export default {
    name:"clinteAtivo",
     props:["ativo"]

}
</script>

<style>

</style>