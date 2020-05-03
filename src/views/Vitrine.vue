<template>
  <section>
    <header>
      <button @click="openMenu" class="amburguer"></button>
      <div class="menu">
        <router-link :to="{name:'massa'}">Massas</router-link>
        <router-link :to="{name:'carnes'}">Carnes</router-link>
        <router-link :to="{name:'bebidas'}">Bebidas</router-link>
        <router-link :to="{name:'peixes'}">Peixes</router-link>
      </div>
    </header>

    <transition enter-active-class="slide-in" leave-active-class="slide-out">
      <MenuLateral class="menu-lateral" v-if="$store.state.menu" />
    </transition>

    <Home />

    <transition
      enter-active-class="transition-geral-in"
      leave-active-class="transition-geral-out"
      mode="out-in"
    >
      <router-view class="pratos"></router-view>
    </transition>
  </section>
</template>
    

<script>
import { api } from "@/mixins/fetchData.js";
import Home from "@/views/Home.vue";
import MenuLateral from "@/components/MenuLateral.vue";

export default {
  name: "Vitrine",
  components: {
    Home,
    MenuLateral
  },
  data() {
    return {
      Pratos: null,
      menu: true
    };
  },
  methods: {
    showCostumer() {
      this.$store.commit("CHANGE_CLIENT_SCREEN", true);
    },
    getCostumers() {
      api.get("/costumer").then(r => {
        this.clientsActive = r.data;
      });
    },
    openMenu() {
      if (this.$store.state.menu === false) {
        this.$store.commit("OPEN_MENU", true);
      } else {
        this.$store.commit("OPEN_MENU", false);
      }
    }
  },
  created() {
    this.getCostumers();
  }
};
</script>
     
     
<style scoped>
a:hover {
 animation: increaseA .5s 2;
 animation-direction: alternate;
}
@keyframes increaseA{
  from{
     transform: scale(1, 1);
  }
  to{
     transform: scale(1.3, 1.6);
  }
}

.pratos {
  position: absolute;
  top: 48px;
}
button {
  padding: 6px;
  width: 60px;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
}
button::before {
  content: "";
  display: inline-block;
  width: 40px;
  height: 4px;
  background: black;
  box-shadow: 0 10px black, 0 -10px black;
}
.menu {
  display: flex;
  justify-content: space-around;
}
header {
  padding: 25px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 7fr;
  align-items: center;
}
.slide-in {
  position: absolute;
  animation: menu-abre 1s;
}
@keyframes menu-abre {
  from {
    left: -350px;
  }
  to {
    left: -10px;
  }
}
.slide-out {
  position: absolute;
  animation: menu-fecha 1s;
}
@keyframes menu-fecha {
  from {
    left: -10px;
  }
  to {
    left: -350px;
  }
}

.transition-geral-in {
  position: absolute;
  animation: menu-geral-abre 1s;
}
@keyframes menu-geral-abre {
  from {
    left: 1600px;
    opacity: 0;
  }
  to {
    left: 0px;
    opacity: 1;
  }
}
.transition-geral-out {
  position: absolute;
  animation: menu-geral-fecha 0.5s;
}
@keyframes menu-geral-fecha {
  from {
    left: 0px;
    opacity: 1;
  }
  to {
    left: 1600px;
    opacity: 0;
  }
}
</style>


    





  
     

          

  



 

















    
