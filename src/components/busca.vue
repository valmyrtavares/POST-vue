<template>
<section>
  
  
<form >
  <input type="text" v-model="textoDeBusca">
   <input @click.prevent="buscandoPratos" type="submit" value="busca">
   <button type="submit"><i class="fa fa-search"></i></button>
</form>
</section>


</template>

<script>
export default {
    name:"busca",
    
    computed:{
        url(){
            return `?q=${this.textoDeBusca}`
        }
    },
    data(){
        return{
            textoDeBusca:""
        }
    },
    methods:{
        buscandoPratos(){
          
         this.$emit("sendUrl", this.url)
        },
      
    }

}
</script>

<style scoped>
form{
    position: relative;
    top:29px;
    width:200px;
    height:60px;
    display:flex;
    float:right;
  
}

input{
    width:150px;
     height:30px;
    border: solid .5px black;
      margin:0;
      background:white;
}
</style>