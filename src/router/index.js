import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '@/views/Cadastro.vue'
import Vitrine from "@/views/Vitrine.vue"
import VitrineDestaque from '@/views/VitrineDestaque.vue'
import EditarPratos from '@/views/EditarPratos.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:"/",
    name: "vitrine",
    component:Vitrine
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
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
