<template>
  <div id="app">
    <header>
      <router-link to="/">
     
        <h2>Famíglias Mancini</h2>
      </router-link>
      <router-link :to="{name:'cadastro'}">
        <p>Cadastre um novo prato</p>
      </router-link>
      <router-view></router-view>
    </header>
  </div>
</template>

   
<script>
  export default {
    name: "app"
  };
</script>


<style>
header {
  display: inline;
}

a {
  text-decoration: none;
}

h2 {
  text-align: center;
}
form{
    margin-left:20px;
}
form input{
    display:block;
    margin-bottom:20px;
    height:60px;
    width:500px;
    border:none;
    background:rgba(0,0,0,.05);
    border-radius:10px;
}
button{
    padding:15px 30px;
    border:none;
    border-radius:5px;
    background: #9d00ff75
}
section{
  position: relative;
  animation: vitrine 1s ;
}
@keyframes vitrine {
  from{left:30px; opacity: 0;}
  to{left:0px; opacity: 1;}
}
</style>









