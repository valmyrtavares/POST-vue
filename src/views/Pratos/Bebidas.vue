<template>
  <section>
    <busca @sendUrl="trazPratos"></busca>
    <ShowGourmet :PratosGerais="bebidas"></ShowGourmet>
  </section>
</template>
     
<script>
import { api } from "@/mixins/fetchData.js";
import ShowGourmet from "@/components/ShowGourmet.vue";
import busca from "@/components/busca.vue";

export default {
  name: "bebidas",
  components: {
    ShowGourmet,
    busca
  },
  data() {
    return {
      bebidas: null,
      dataPratos: ""
    };
  },

  methods: {
    geraPrato() {
      api.get(`/bebidas${this.dataPratos}`).then(r => {
        this.bebidas = r.data;
      });
    },
    trocarRotas() {
      this.$store.commit("CHANGE_ROUTE", "bebidas");
    },
    trazPratos(msg) {
      console.log("veio");
      this.dataPratos = msg;
      this.geraPrato();
    }
  },

  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.trocarRotas();
      vm.geraPrato();
    });
  },

  created() {
    this.geraPrato();
  }
};
</script>
     
<style scoped>

</style>

   

     
     
       
      






