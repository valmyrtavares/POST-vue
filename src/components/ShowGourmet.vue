<template>
  <section>
    <div v-for="(item, index) in PratosGerais" :key="index">
      <router-link :to="{name:'novaRota',params:{fetch: item}}">
        <main>
          <h2>{{item.nome}}</h2>
          <p>
            Valor {{item.preco}}
            <i class="fas fa-edit"></i>
          </p>
          <p>Serve {{item.caracteristicas}}</p>
        </main>
      </router-link>
      <router-link :to="{name:'novaRota',params:{fetch: item}}">
        <p>{{item.descricao}}</p>
      </router-link>
      <div class="icones">
        <router-link  class="edit" :to="{name:'novaRota',params:{fetch: item}}">
         
        </router-link>
        <button @click="DeletarPrato(item.id)" class="delete"></button>
      </div>
      <router-link :to="{name:'novaRota',params:{fetch: item}}">
        <img class="increase" :src="item.imagem" />
      </router-link>
    </div>
  </section>
</template>

<script>
import { api } from "@/mixins/fetchData.js";

export default {
  name: "ShowGourmet",
  props: ["PratosGerais"],
  methods: {
    DeletarPrato(id) {
      const confirmar = window.confirm("Deseja realmente remover esse item");
      if (confirmar) {
        api.delete(`/${this.$store.state.route}/${id}`);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.icones {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center; 
  background: transparent;
  border: none;
  height: 100%;
  text-indent: -100px;
}
.icones .edit {
  width: 36px;
  height: 36px;
  border: none;
  background-image: url("../assets/ferramentas-de-edicao.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.icones .delete {
  width: 36px;
  height: 36px;
  border: none;
  background-image: url("../assets/icon.svg");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

section {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 200vh;
}
div {
  width: 100%;
  background: rgb(230, 232, 230);
  display: grid;
  grid-template-columns: 3fr 6fr 1fr 3fr;
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
  max-height: 400px;
  border-radius: 15px;
}
</style>