<template>
    <div>
        <h2>editar Pratos</h2>
        <p>{{editar}}</p>
            <form>
                <input type="text" name="nome" v-model="editar.nome" placeholder="nome">
                <input type="number" name="preco" v-model="editar.preco" placeholder="preço">
                <input type="text" name="caracteristicas" v-model="editar.caracteristicas" placeholder="caracteristicas">
                <input type="text" name="descricao" v-model="editar.descricao" placeholder="descricao">
                <input type="text" name="imagem" v-model="editar.imagem" placeholder="imagem">
                <button @click.prevent="editarPrato">Editar</button>
            </form>
    </div>
</template>
     
     

<script> 
import {api} from '@/mixins/fetchData.js'

export default {
    name:"EditarPratos",
    props:["editar"],
    methods:{
        editarPrato(){
             api.put(`/dados/${this.editar.id}`, this.editar)
        }
   },
  
   

}
</script>

<style>

</style>