<template>
  <section>
    <main>
      <button class="btn-close-screen" @click="voltaTelaAnterior">x</button>
      <router-link :to="{name:'EditarPratos',params:{ editar :fetch}}">
        <h2>{{fetch.nome}}</h2>
      </router-link>
      <p>Valor {{fetch.preco}}</p>
      <p>Serve {{fetch.caracteristicas}}</p>
    </main>
     <router-link :to="{name:'EditarPratos',params:{ editar :fetch}}">
    <p class="descricao">{{fetch.descricao}}</p>
     </router-link>
     <router-link :to="{name:'EditarPratos',params:{ editar :fetch}}">
    <img :src="fetch.imagem" />
     </router-link>
  </section>
</template>

<script>


export default {
  name: "VitrineDestaque",
  data() {
    return {
      teste: null,
      fetchDoBem: fetch
    };
  },
  props: ["fetch"],
  methods: {
   
  voltaTelaAnterior(){
    console.log("Rolou")
    this.$router.push(`/${this.$store.state.route}`)
  }
  }
};
</script>

<style scoped>
h2{
  text-align: center;
}
.descricao{
  max-width:70%;
   margin: 10px 40px;
   background:rgba(0,0,0,.1);
   border-radius:10px;
   padding:10px
}
div {
  width: 70%;
  margin: 30px auto;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 15px;
}
img {
  max-width: 70%;
  margin: 10px 40px;
}
p+p{
  margin:15px;
}

section {
  border-radius:15px;
  border:solid 1px black;
  width:70%;
  margin:20px auto;
  padding:20px;
  position: relative;
  animation: vitrine 1s;
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