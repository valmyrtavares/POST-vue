<template>
  <div id="app">
   <header>

   </header>
   <router-link to="/"><h2>Famíglia Mancini</h2></router-link>
 
 <router-link :to="{name:'cadastro'}"><p>Cadastre um novo prato</p></router-link>

   
 <router-view></router-view>
  </div>
</template>

<script>
export default{
  name: "app"
}

</script>


<style>
header{
  display: inline;
}

a{
  text-decoration: none;
}

h2{
  text-align:center
}

</style>
