<template>
  <section>
    <h2>Vinhos</h2>
    <ShowGourmet :PratosGerais = "bebidas"> </ShowGourmet>
  </section>
</template>
     
<script>
  import {api} from "@/mixins/fetchData.js"
  import ShowGourmet from "@/components/ShowGourmet.vue"

  export default {
    name:"bebidas",
    components:{
      ShowGourmet
    },
    data(){
      return{
        bebidas:null
      }
    },

    methods: {
      geraPrato() {
        api.get("/bebidas").then(r => {
          this.bebidas = r.data;
        });
      },
      trocarRotas(){
        this.$store.commit("CHANGE_ROUTE", "bebidas")
      }
    },

    beforeRouteEnter:((to, from, next)=>{
      next((vm)=>{
        vm.trocarRotas()
      })
    }),

    created() {
      this. geraPrato()
      }
  }
</script>
      
    

<style scoped>

</style>
   

     
     
       
      






