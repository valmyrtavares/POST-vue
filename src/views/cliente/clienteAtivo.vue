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
        <p>Esse é o total: {{client.valorTotal}}</p>

        <ul v-for="(prato, index) in client.pedidosFeitos" :key="index">
          <li>Prato {{prato.nome}}</li>
          <li>Valor {{prato.preco}}</li>
          <button @click="excluirPratoCorrente(index)" class="excluir-prato">x</button>
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
      totalConta: 0,
      client: null,
      tipo: "",
      prato: "",
      buscaPrato: null,
      pedido: {
        id: "",
        name: "",
        table: "",
        pedidosFeitos: [],
        valorTotal: ""
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
      await this.totalBill();
      this.atualizandoValorTotal();
      await api.put(`/pedido/${this.client.id}`, this.pedido);
      await this.atualizandoCliente();
      this.pedido.pedidosFeitos = [];
      
    },
     

    atualizandoPedido() {
      this.pedido.id = this.client.id;
      this.pedido.name = this.client.name;
      this.pedido.table = this.client.table;
      this.pedido.pedidosFeitos = this.client.pedidosFeitos;
      if(this.client.totalConta != undefined)
     { this.pedido.valorTotal = this.client.totalConta}
    },

  

    insereNovoPratoArray(prod) {
      this.pedido.pedidosFeitos.unshift(prod);
    },
    totalBill() {
      this.totalConta = 0;
      this.client.pedidosFeitos.forEach(element => {
        this.totalConta += +element.preco;
      });

      return this.totalConta;
    },
    atualizandoValorTotal() {
      this.pedido.valorTotal = this.totalConta;
    },
      async excluirPratoCorrente(id){
       
      this.client.pedidosFeitos.splice(id,1)
        this.totalBill();
      this.atualizandoValorTotal();
       this.atualizandoPedido()
       await api.put(`/pedido/${this.client.id}`, this.pedido);
      await this.atualizandoCliente();
      this.pedido.pedidosFeitos = [];


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
  border: solid 1px black;
}
li {
  margin: 0px;
}
.excluir-prato{
  background:none;
  border:none
}
</style>
         




     
   

         
  



