<template>
  <div class="transicao-geral">
    <button @click="sairDaTela" class="btn-close-screen">x</button>
    <h1>Novo Usuario</h1>
    <form>
      <label for="name">Nome</label>
      <input type="text" name="nome" v-model="newUser.name" />
      <label for>Selecione categoria:    </label>
      <select class="select" v-model="newUser.office">
        <option name="peixes" value="gerente">Gerente</option>
        <option name="bebida" value="gracon">Garçon</option>
        <option name="carne" value="chef">Chef</option>
        <option name="massa" value="caixa">Caixa</option>
      </select>
      <label for="numeroMesa">Login</label>
      <input type="text" name="login" v-model="newUser.login" />
      <label for="numeroMesa">Senha</label>
      <input type="text" name="senha" v-model="newUser.password" />
      <button class="btn-standart" @click.prevent="gerarUsuario(newUser.login)">Criar Usuario</button>
    </form>
    
    
  </div>
</template>

<script>
  import {api} from "@/mixins/fetchData.js"

export default {
  data() {
    return {
      newUser: {
        name: "",
        office: "",
        login: "",
        password: "",
        id:""
      }
    };
  },
  methods: {
    gerarUsuario(login) {
       this.validarUsuario();
       this.formatandoUsuario(login)
       api.post("/usuario", this.newUser)
      console.log(this.newUser)
      
      this.$router.push("/login");
    },
    formatandoUsuario(login){
      this.newUser.id = login
    },
    sairDaTela(){
      this.$router.push("/")
    },
     validarUsuario(){
       
       if(this.newUser.name==="")
      { 
      alert ("O campo Nome tem que ser preenchido");
      throw true;
      }
       if(this.newUser.office==="")
       {alert("O campo office precisa ser preenchido")
        throw true}
       
        if(this.newUser.login==="")
       {alert("O campo login precisa ser preenchido")
       throw true;
       }
        
        if(this.newUser.password==="")
       {alert("O campo password precisa ser preenchido")
        throw true}
      
     }
  }
};
</script>

<style scoped>
form{
  display:flex;
  flex-direction:column;
}
select{
  height: 40px;
  width:60%;
  border-radius:10px;
  margin-bottom:16px;
  font-size:17px;
}
label{
  margin-bottom:10px;
}
h1{
  text-align:center;
}
div{
  width:60%;
  background:rgba(0,0,0,.2);
  border-radius:15px;
  padding:10px;
  margin:30px auto;
}

</style>
      





