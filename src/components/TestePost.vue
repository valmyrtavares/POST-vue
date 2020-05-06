<template>
  <section>
    <div>
      <form>
        <label for="name">Eu</label>
        <input type="text" v-model="pronomes.eu" />

        <label for="name">ID</label>
        <input type="text" v-model="pronomes.id" />

        <label for="name">Ele</label>
        <input type="text" v-model="nos" />
     
        <input type="submit" value="manda" @click.prevent="MandaPost" />
        <input type="submit" value="adicionando Itens" @click.prevent="alimentandoItens" />
         <input type="submit" value="retirando Itens" @click.prevent="retireItem" />

        <button @click="deletando(pronomes.id)">Excluir</button>
        <button @click="Editando(pronomes.id)">Editar</button>
      </form>
      <form>
        <input type="text" v-model="pratos.nome" placeholder="nome" />
        <input type="text" v-model="pratos.preco" placeholder="preço" />
        <input type="text" v-model="pratos.estilo" placeholder="estilo" />
        <button @click.prevent="testandoPush">PUSH ARRAY</button>
      </form>
    </div>

    <div v-for="(item , index) in array" :key="index">
      <p>{{item.nome}}</p>
      <p>{{item.preco}}</p>
      <p>{{item.estilo}}</p>
    </div>
    {{array}}
  </section>
</template>

<script>
import { api } from "@/mixins/fetchData.js";
export default {
  name: "TestePost",
  data() {
    return {
    //   id: "",
      eles: "",
      nos: "",
      pronomes: {
        eu: "",
        ele: [],
        id: ""
      },
     
      pratos: {
        nome: "",
        preco: "",
        estilo: ""
      },
      array: []
    };
  },
  methods: {
    MandaPost() {
  

      api.post("/pedido", this.pronomes);
    },
    deletando(id) {
      api.delete(`/peido/${id}`);
    },
    Editando(id) {
    //   this.formatandoArray();
      api.put(`/pedido/${id}`, this.pronomes);
    },
    // formatandoArray() {
    //     this.pronomes.ele.push(this.nos, this.eles);
    // },
    atualizandoArray() {
        this.array.unshift(this.pratos);
    },
    testandoPush(){
        this.pronomes.ele.push(this.nos)
    },
        alimentandoItens(){
        this.pronomes.ele.push(this.nos)
        console.log(this.pronomes.ele)
    },
    retireItem(){
        this.pronomes.ele.pop()
         console.log(this.pronomes.ele)
    }

  }
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
form {
  width: 50%;
  margin: 30px auto;
}
input {
  border: solid 1px black;
}
</style>