<template>
    <section>
      <busca @sendUrl="trazPratos"></busca>
      <ShowGourmet :PratosGerais="peixes"></ShowGourmet>
    </section>
</template>
    


<script>
  import { api } from "@/mixins/fetchData.js";
  import ShowGourmet from "@/components/ShowGourmet.vue";
  import busca from "@/components/busca.vue"

  export default {
    name: "massas",
    components: {
      ShowGourmet,
      busca
    },
    data() {
      return {
        peixes: null,
        dataPratos:""
      };
    },

    methods: {
      geraPrato() {
        api.get(`/peixes${this.dataPratos}`).then(r => {
          this.peixes = r.data;
        });
      },
      trocarRota() {
        this.$store.commit("CHANGE_ROUTE", "peixes");
      },
      trazPratos(msg){
        this.dataPratos = msg,
        this.geraPrato()
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        vm.trocarRota();
        vm. geraPrato();
      });
    },

    created() {
      this.geraPrato();
    }
  };
</script>


<style scoped>
</style>
   
       

     
     
       
      






