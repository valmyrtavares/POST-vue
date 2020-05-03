<template>
  <section>
     <busca @sendUrl="trazPratos"></busca>
    <ShowGourmet :PratosGerais="carnes"></ShowGourmet>
  </section>
</template>

              
<script>
  import { api } from "@/mixins/fetchData.js";
  import ShowGourmet from "@/components/ShowGourmet.vue";
  import busca from "@/components/busca.vue"

  export default {
    name: "carnes",
    components: {
      ShowGourmet,
      busca
    },

    data() {
      return {
        carnes: null,
         dataPratos:""
      };
    },

    methods: {
      geraPrato() {
        api.get(`/carnes${this.dataPratos}`).then(r => {
          this.carnes = r.data;
        });
      },
      trocarRota() {
        this.$store.commit("CHANGE_ROUTE", "carnes");
      },
       trazPratos(msg){
        this.dataPratos = msg
         this.geraPrato()
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        vm.trocarRota();
        vm. geraPrato()
      });
    },
       

    created() {
      this.geraPrato();
    }
  };
</script>



<style scoped>
</style>
   

     
     
       
      






