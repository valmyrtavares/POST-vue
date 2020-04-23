<template>
  <div>
   
    <main>
      <button @click="DeletarPrato(fetch.id)">x</button>
      <router-link :to="{name:'EditarPratos',params:{ editar :fetch}}">
        <h2>{{fetch.nome}}</h2>
      </router-link>
      <p>Valor {{fetch.preco}}</p>
      <p>Serve {{fetch.caracteristicas}}</p>
    </main>
    <p>{{fetch.descricao}}</p>
    <img :src="fetch.imagem" />
  </div>
</template>

<script>
import { api } from "@/mixins/fetchData.js";

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
    DeletarPrato(id) {
      const confirmar = window.confirm("Deseja realmente remover esse item");
      if (confirmar) {
        api.delete(`/dados/${id}`);
        this.$router.push("/");
        // }
      }
    }
  }
};
</script>

<style scoped>
div {
  width: 70%;
  margin: 30px auto;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 15px;
}
img {
  max-width: 100%;
  margin: 10px auto;
}
button {
  font-size: 25px;
  border: none;
  position: relative;
  top: 0;
  left: 550px;
  color: red;
  background: white;
  border-radius: 15px;
  cursor: pointer;
}
</style>