<template>
    <section>
      <h2>Peixes</h2>
      <ShowGourmet :PratosGerais="peixes"></ShowGourmet>
    </section>
</template>
    


<script>
  import { api } from "@/mixins/fetchData.js";
  import ShowGourmet from "@/components/ShowGourmet.vue";

  export default {
    name: "massas",
    components: {
      ShowGourmet
    },
    data() {
      return {
        peixes: null
      };
    },

    methods: {
      geraPrato() {
        api.get("/peixes").then(r => {
          this.peixes = r.data;
        });
      },
      trocarRota() {
        this.$store.commit("CHANGE_ROUTE", "peixes");
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        console.log("Before Funciona em Peixes");
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
   

     
     
       
      






