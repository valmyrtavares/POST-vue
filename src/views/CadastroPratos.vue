<template>
  <section class="container-cadastro">
    <h2>Cadastro de Pratos</h2>
    <button @click="fechaTela" class="btn-close-screen">x</button>
    <form>
         <label for="name">Nome do prato</label>
      <input type="text" name="nome" v-model="pratos.nome"/>
       <label for="name">Preço Atual</label>
      <input type="number" name="preco" v-model="pratos.preco" placeholder="preço" />
       <label for="name">Características essenciais</label>
      <input type="text" name="caracteristicas" v-model="pratos.caracteristicas"/>
       <label for="name">Descrição</label>
      <input type="text" name="descricao" v-model="pratos.descricao"  />
       <label for="name">Insira um endereço de imagem URL</label>
      <input type="text" name="imagem" v-model="pratos.imagem" />
      <label for>Selecione categoria:    </label>
      <select class="select" v-model="tipoPratos">
        <option name="peixes" value="peixes">Peixe</option>
        <option name="bebida" value="bebidas">Bebida</option>
        <option name="carne" value="carnes">Carne</option>
        <option name="massa" value="massas">Massa</option>
      </select>

      <button class="btn-standart btn-cadastro-pratos" @click.prevent="adicionaBd">Cadastrar Prato</button>

      <!-- <button v-if="isAlteracao" >Excluir</button> -->

    </form>

  </section>
</template>
            
<script>
 import { api } from "@/mixins/fetchData.js";
export default {
  name: "Cadastro",
  
  data() {
    return {
     
      pratos: {
        nome: "",
        preco: 0,
        caracteristicas: "",
        descricao: "",
        imagem: ""
      },
      tipoPratos: null
    };
  },
  methods: {
    adicionaBd() {
      if(this.tipoPratos){
        api.post(`/${this.tipoPratos}/`, this.pratos);
         this.encaminhaTela()
      }else{
        alert("A categoria do prato precisa ser escolhida ")
      }

  },
  encaminhaTela(){
      this.$router.push(`/${this.tipoPratos}`)
  },
  fechaTela(){
    this.$router.push("/")
  },
  CheckUser(){
    if(this.$store.state.logado){
      this.$router.push("/cadastro")
    }else{
      this.$router.push("/login")
    }
   

  }
  },
  beforeRouteEnter:(to, from, next)=>{
    next(vm=>{
      vm.CheckUser()
    })
  },
  
};

    
</script>
<style scoped>
label{
    margin-bottom:10px;
    font-size:17px
}
.btn-cadastro-pratos{
    width:30%;
    margin-top:30px
}
.select{
    width: 50%;
    height:40px;
    border-radius:10px;
    font-size:17px;
}
form {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}
h2{
    text-align:center;
    margin-bottom:30px;
    font-size:40px;
}
form input {
  margin-bottom: 20px;
  height: 50px;
  width: 500px;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

section {
    padding:15px;
  position: relative;
  animation: vitrine 1s;
  width: 50%;
}
@keyframes vitrine {
  from {
    left: 30px;
    opacity: 0;
  }
  to {
    left: 0px;
    opacity: 1;
  }
}
</style>
           

        
       

      
      
               

           
                
               
        
      