<template>
  <section>
    <busca @sendUrl="trazPratos"></busca>
    <ShowGourmet :PratosGerais="massa"></ShowGourmet>
  </section>
</template>
    
<script>
import { api } from "@/mixins/fetchData.js";
import ShowGourmet from "@/components/ShowGourmet";
import busca from "@/components/busca.vue";

export default {
  name: "massa",
  components: {
    ShowGourmet,
    busca
  },

  data() {
    return {
      massa: null,
      dataPratos: ""
    };
  },

  methods: {
    geraPrato() {
      api.get(`/massas${this.dataPratos}`).then(r => {
        this.massa = r.data;
      });
    },
    trocarRota() {
      this.$store.commit("CHANGE_ROUTE", "massas");
    },
    trazPratos(msg) {
      this.dataPratos = msg;
      this.geraPrato();
    }
  },

  created() {
    this.geraPrato();
  },

  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.trocarRota();
      vm.geraPrato();
    });
  }
};
</script>

<style scoped>
/* section{
  position:absolute;
  top:0px;
  left:0px;
  z-index:50;

  
} */
</style>
        
   



       
     
        

       
  
 

    
      
      
   

     
     
       
      






