<template>
  <section>
     
         <div v-for="(item, index) in PratosGerais" :key="index">
              <router-link :to="{name:'novaRota',params:{fetch: item}}">
          <main>
            <h2>{{item.nome}}</h2>
            <p>Valor {{item.preco}}</p>
            <p>Serve {{item.caracteristicas}}</p>
          </main>
           </router-link>
             <router-link :to="{name:'novaRota',params:{fetch: item}}">
          <p>{{item.descricao}}</p>
           </router-link>
          <router-link :to="{name:'novaRota',params:{fetch: item}}">
            <img class="increase" :src="item.imagem" />
          </router-link>
        </div>
  </section>
</template>

<script>
export default {
    name:"ShowGourmet",
    props:["PratosGerais"]

}
</script>

<style scoped>
section{
  background:rgba(0,0,0,.3);
  width:100%;
  height:200vh;

}
div {
  width: 100%;
  background:rgb(230, 232, 230);
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  align-items: center;
  border-radius: 15px;
  border: solid 0.5px black;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.1);
}
main {
  text-align: center;
}
img {
  max-width: 300px;
  max-height:400px;
  border-radius: 15px;
}

</style>