<template>
    <section>
        <h2>Editar Pratos</h2>
        <button class="btn-close-screen" @click.prevent="sairDaTela">x</button>
      
            <form>
                <input type="text" name="nome" v-model="editar.nome" placeholder="nome">
                <input type="number" name="preco" v-model="editar.preco" placeholder="preço">
                <input type="text" name="caracteristicas" v-model="editar.caracteristicas" placeholder="caracteristicas">
                <input type="text" name="descricao" v-model="editar.descricao" placeholder="descricao">
                <input type="text" name="imagem" v-model="editar.imagem" placeholder="imagem">
                <button class="btn-standart" @click.prevent="editarPrato">Editar</button>
            <button @click="DeletarPrato(editar.id)" class="btn-standart btn-excluir">Excluir Prato</button>
            </form>
          
    </section>
</template>
     
     

<script> 
import {api} from '@/mixins/fetchData.js'

export default {
    name:"EditarPratos",
    props:["editar"],
    methods:{
        editarPrato(){
         
             api.put(`/${this.$store.state.route}/${this.editar.id}`, this.editar)
              this.rotaReversa()
        },
        rotaReversa(){
           console.log("foi")
             this.$router.push(`/${this.$store.state.route}`)
        },
        CheckUser(){
            if(this.$store.state.logado==="")
                this.$router.push("/login")
            
        },
         DeletarPrato(id) {
      const confirmar = window.confirm("Deseja realmente remover esse item");
      if (confirmar) {
        api.delete(`/${this.$store.state.route}/${id}`);
        this.$router.push("/");
        // }
      }
    },
    sairDaTela(){
        this.$router.push("/")
    }
   },
   beforeRouteEnter:(to, from, next)=>{
       next(vm=>{
           vm.CheckUser()
       })
   }
  
   

}
</script>

<style scoped>
h2{
text-align:center;
margin-bottom:20px;
margin-top:20px;
}
section{
    width:50%;
    margin:30px auto;
    background:rgba(0,0,0,.1);
    border-radius:15px;
    padding:15px
}
input{
    height:45px;
}
.btn-excluir{
    float:right;
}

</style>