import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '@/views/Cadastro.vue'
import Vitrine from "@/views/Vitrine.vue"


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
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
