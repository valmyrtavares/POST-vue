<template>
  <section>
    <div>
      <h1>Cliente Ativos</h1>

      <div class="cliente-ativo">
        {{ativo}}
        <p>
          Nome:
          <span>{{client.name}}</span>
        </p>
        <p>
          Pedido
          <span>{{client.request}}</span>
        </p>
        <p>
          Numero da mesa
          <span>{{client.tableNumber}}</span>
        </p>
        <p>
          Clientes por mesa
          <span>{{client.numCostumer}}</span>
        </p>
        <ul v-for="(prato, index) in Pedidos" :key="index">
          <li>Prato {{prato.nome}}</li>
          <li>Valor {{prato.preco}}</li>
        </ul>
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
export default {
  name: "clinteAtivo",
  props: ["ativo"],
  data() {
    return {
      client: null,
      tipo: "",
      prato: "",
      buscaPrato: null,
      Pedidos: []
    };
  },
  computed: {
    url() {
      return `/${this.tipo}/${this.prato}`;
    }
  },
  methods: {
    async buscaProduto() {
      await api.get(this.url).then(r => (this.buscaPrato = r.data));
      await this.organizaProdutos(this.buscaPrato);
    },
    organizaProdutos(prod) {
      this.Pedidos.unshift(prod);
    },

    atualizandoCliente() {
      api.get(`/costumer/${this.ativo}`).then(r => {
        this.client = r.data;
      });
    }
  },
  watch: {
    ativo() {
      this.atualizandoCliente();
    }
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
}
li{
  margin:0px;
}
</style>
         




     
   

         
  



