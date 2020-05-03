<template>
  <div>
     <ul>
      <li><router-link to="/cadastraCliente">Cadastrar Clientes</router-link></li>
      <li><router-link to="/admin">Cadastrar Usuario </router-link></li>
      <li><router-link to="/cadastro">Cadastrar Pratos</router-link></li>
      <li><router-link to="/clientes">Clientes</router-link></li>
      <li class="usarioTeste" @click="testarUsuario">Editar Pratos</li>
     </ul>
  </div>
</template>

<script>
export default {
  name:"MenuLateral",
  data(){
    return{
      usuarioLogado:null
    }
  },
methods:{

  testarUsuario(){
    
    if(this.$store.state.logado==="")
   { this.$router.push("/login")
   console.log(this.$store.state.logado)
    console.log("Foi")
  }
   else
   {this.$router.push("/massas")
   
   }
   
  }
}

}
</script>



<style scoped>
div{
    background:rgb(64, 64, 143, 0.5);
    width:250px;
    height: 100vh;
    z-index:10;
    position:absolute;
    left:-10px
    
}
ul{
  padding-top:50px;
}
li{
  margin-left:0;
}
a{
  color:white;
}
.usarioTeste{
  cursor:pointer;
   color:white;
  
}

</style>