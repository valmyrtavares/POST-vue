<template>
 <main>
    <div v-for="(item, index) in testeFetch" :key="index">
      <main >
        <h2>{{item.nome}}</h2>
        <p>Valor {{item.preco}}</p>
        <p>Serve {{item.caracteristicas}}</p>
      </main>
      <p>{{item.descricao}}
      </p>
      <img :src=item.imagem>
  
    </div>
     <!-- {{testeFetch}} -->
 
 </main>
</template>

<script>
export default {

  name:"Vitrine",
  data(){
    return{
      testeFetch:null
    }
  },
    methods:{
            geraPrato(){
            fetch("http://localhost:3000/dados")
            .then(r=> r.json())
            .then(r => { this.testeFetch = r})
            },
          

        },
        created(){
            this.geraPrato("/dados")
        }

}
</script>

<style scoped>
div{
  width:100%;
  background:rgba(0,0,0,.2);
  display:grid;
  grid-template-columns:3fr 6fr 3fr;
  align-items : center;
   border-radius:15px;
   border:solid .5px black;
    box-shadow: 10px 10px rgba(0,0,0,.1);
}
main{
  text-align: center;
}

img{
  max-width:300px;
 
  border-radius:15px
}

</style>