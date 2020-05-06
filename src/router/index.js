import Vue from 'vue'
import VueRouter from 'vue-router'
import CadastroPratos from '@/views/CadastroPratos.vue'
import Vitrine from "@/views/Vitrine.vue"
import VitrineDestaque from '@/views/VitrineDestaque.vue'
import EditarPratos from '@/views/EditarPratos.vue'
import Massas from '@/views/Pratos/Massas.vue'
import Carnes from '@/views/Pratos/Carnes.vue'
 import Bebidas from '@/views/Pratos/Bebidas.vue'
 import Peixes from '@/views/Pratos/Peixes.vue'
import ClienteAtivo from "@/views/cliente/clienteAtivo.vue"
 import Clientes from "@/views/cliente/clientesEmTransito.vue"
 import CadastroClientes from "@/views/cliente/CadastraCliente.vue"
 import CadastroUsuario from "@/views/cliente/CadastroUsuario.vue"
 import Login from "@/components/telaLogin.vue"
 import teste from "@/components/TestePost.vue"

 Vue.use(VueRouter)
 
   const routes = [
    {
      path:"/teste",
      name:"teste",
      component:teste
    },
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
    component:CadastroPratos
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
    path:"/cadastraCliente",
    name: "cadastraCliente",
    component:CadastroClientes
  },
  {
    path:"/admin",
    name: "administrador",
    component:CadastroUsuario,
  },
    
      {
      path:"/login",
      name:"login",
      component:Login
    },
    
  {
    path:"/clientes",
    name:"clientes",
    component: Clientes,
    props:true,
    children:[
      {
        path: ":ativo",
        name:"clienteAtivo",
        component: ClienteAtivo,
        props:true,
       
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
