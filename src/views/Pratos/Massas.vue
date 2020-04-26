<template>
  <section>
    <h2>Massas</h2>
    <ShowGourmet :PratosGerais = "massa"></ShowGourmet>
  </section>
</template>
    
        
   
<script>
  import { api } from "@/mixins/fetchData.js";
  import ShowGourmet from "@/components/ShowGourmet"

  export default {
    name:"massa",
    components:{
    ShowGourmet
    },
        
    data(){
      return{
        massa:null
      }
    },

    methods: {
      geraPrato() {
    
        api.get("/massas").then(r => {
          this.massa = r.data;
        });
      },
      trocarRota(){
    
        this.$store.commit("CHANGE_ROUTE", "massas")
      }
    },

    created() {
      this. geraPrato()
    }, 
      
    beforeRouteEnter:((to, from, next)=>{
      next((vm) =>{
        vm.trocarRota()
        })
    })
  }
</script>




<style scoped>

</style>
       
     
        

       
  
 

    
      
      
   

     
     
       
      






