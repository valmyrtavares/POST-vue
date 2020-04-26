import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '@/views/Cadastro.vue'
import Vitrine from "@/views/Vitrine.vue"
import VitrineDestaque from '@/views/VitrineDestaque.vue'
import EditarPratos from '@/views/EditarPratos.vue'
import Massas from '@/views/Pratos/Massas.vue'
import Carnes from '@/views/Pratos/Carnes.vue'
 import Bebidas from '@/views/Pratos/Bebidas.vue'
 import Peixes from '@/views/Pratos/Peixes.vue'
import ClienteAtivo from "@/views/cliente/clienteAtivo.vue"
 import Clientes from "@/views/cliente/clientesEmTransito.vue"

 Vue.use(VueRouter)
 
   const routes = [
   {
     path:"/",
     name: "vitrine",
     component:Vitrine,
     props:true,
     children:[
       {
         path:"massas",
         name: "massa",
         component:Massas,
       },
       {
       path:"carnes",
       name: "carnes",
       component:Carnes,
      },
      {
        path:"bebidas",
        name: "bebidas",
        component:Bebidas,
      },
      {
        path:"peixes",
        name: "peixes",
        component:Peixes,
       },
      ]
    },
    {
    path:"/cadastro",
    name:"cadastro",
    component:Cadastro
  },
   {
     path:":fetch",
    name: "novaRota",
    component:VitrineDestaque,
    props:true
   },
   {
   path:"/fetchEditar:editar",
   name: "EditarPratos",
   component:EditarPratos,
   props:true
  },
  {
    path:"/clientes",
    name:"clientes",
    component: Clientes,
    children:[
      {
        path: ":ativo",
        name:"clienteAtivo",
        component: ClienteAtivo,
        props:true
       
      }
     ]
   }
   ]
   
   const router = new VueRouter({
     mode: 'history',
     base: process.env.BASE_URL,
     routes
   })



 
       
       
       
          
         
 

 
export default router
