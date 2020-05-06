<template>
  <section>
    <div>
      <h1>Cliente Ativos</h1>

      <div class="cliente-ativo">
        <p>
          Nome:
          <span>{{client.name}}</span>
        </p>
        <p>
          Pedido
          <span>{{client.id}}</span>
        </p>
        <p>
          Numero da mesa
          <span>{{client.table}}</span>
        </p>

       
        <ul v-for="(prato, index) in client.pedidosFeitos" :key="index">
          <li>Prato {{prato.nome}}</li>
          <li>Valor {{prato.preco}}</li>
        </ul>
       <valorTotalConta :total="client"></valorTotalConta>
      </div>

     
      <form>
        <input type="number" v-model="prato" />
        <select id="select" v-model="tipo">
          <option name="peixes" value="peixes">Peixe</option>
          <option name="bebida" value="bebidas">Bebida</option>
          <option name="carne" value="carnes">Carne</option>
          <option name="massa" value="massas">Massa</option>
        </select>
        <input type="submit" value="busca" @click.prevent="buscaProduto" />
      </form>

     
    </div>
  </section>
</template>
       

<script>
import { api } from "@/mixins/fetchData.js";
import valorTotalConta from "@/components/valorTotalConta.vue"

export default {
  name: "clinteAtivo",
  components:{
    valorTotalConta
  },
  props: ["ativo"],
  data() {
    return {
     
      client: null,
      tipo: "",
      prato: "",
      buscaPrato: null,
      pedido: {
        id: "",
        name: "",
        table: "",
        pedidosFeitos: []
      }
    };
  },
  computed: {
    url() {
      return `/${this.tipo}/${this.prato}`;
    }
  },
  methods: {
    atualizandoCliente() {
      api.get(`/pedido/${this.ativo}`).then(r => {
        this.client = r.data;
      });
    },

    async buscaProduto() {
      await api.get(this.url).then(r => (this.buscaPrato = r.data));
      await this.atualizandoPedido();
      await this.insereNovoPratoArray(this.buscaPrato);
      await api.put(`/pedido/${this.client.id}`, this.pedido);
      this.pedido.pedidosFeitos = [];
      
    },


    atualizandoPedido() {
      this.pedido.id = this.client.id;
      this.pedido.name = this.client.name;
      this.pedido.table = this.client.table;
      this.pedido.pedidosFeitos = this.client.pedidosFeitos;
    },

    insereNovoPratoArray(prod) {
      this.pedido.pedidosFeitos.unshift(prod);
    }
  },
  watch: {
    ativo() {
      this.atualizandoCliente();
    },
  
   
  },
  created() {
    this.atualizandoCliente();
  }
};
</script>

<style scoped>
.cliente-ativo {
  width: 90%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 10px;
  margin: 10px 100px;
}
h1 {
  text-align: center;
}

input {
  max-width: 100px;
  height: 40px;
  border: solid 1px black;
}
li {
  margin: 0px;
}
</style>
         




     
   

         
  



