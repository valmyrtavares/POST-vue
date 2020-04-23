<template>
    <div>
        <h3>Cadastro</h3>
        <form>
            <input type="text" name="nome" v-model="pratos.nome" placeholder="nome">
            <input type="number" name="preco" v-model="pratos.preco" placeholder="preço">
            <input type="text" name="caracteristicas" v-model="pratos.caracteristicas" placeholder="caracteristicas">
            <input type="text" name="descricao" v-model="pratos.descricao" placeholder="descricao">
            <input type="text" name="imagem" v-model="pratos.imagem" placeholder="imagem">
             <button @click.prevent="adicionaBd">Cadastrar Prato</button>
        </form>
        <router-link :to="{name:'novaRota'}">teste nova rota</router-link>
    </div>
</template>
            
<script>
 import { api } from '@/mixins/fetchData.js'
    export default{
        name:"Cadastro",
        data(){
            return{
                pratos:{
                    nome:"",
                    preco:0,
                    caracteristicas:"",
                    descricao:"",
                    imagem:""
            }
            }
        },
        methods:{
            adicionaBd(){
                //Opção de post via componente
                api.post("/dados", this.pratos)
                //Opção de post via store
               // this.$store.dispatch("adicionarPrato", this.pratos)
                this.$router.push("/")
            }
        },
    }
</script>
<style>
       
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
</style>
           

        
       

      
      
               

           
                
               
        
      