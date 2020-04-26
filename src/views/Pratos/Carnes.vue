<template>
  <section>
    <h2>Carnes</h2>
    <ShowGourmet :PratosGerais="carnes"></ShowGourmet>
  </section>
</template>

              
<script>
  import { api } from "@/mixins/fetchData.js";
  import ShowGourmet from "@/components/ShowGourmet.vue";

  export default {
    name: "carnes",
    components: {
      ShowGourmet
    },

    data() {
      return {
        carnes: null
      };
    },

    methods: {
      geraPrato() {
        api.get("/carnes").then(r => {
          this.carnes = r.data;
        });
      },
      trocarRota() {
        this.$store.commit("CHANGE_ROUTE", "carnes");
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        vm.trocarRota();
      });
    },

    created() {
      this.geraPrato();
    }
  };
</script>



<style scoped>
</style>
   

     
     
       
      






