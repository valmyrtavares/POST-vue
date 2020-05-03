<template>
  <div>
    <transition enter-active-class="entrada" leave-active-class="saida">
      <img v-if="saiEntra" :src="imagem" alt />
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      saiEntra: true,
      i: 0,
      imagem:
        "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000010ZApnEAG/5d795f99e4b09720b04d6561.jpg&w=710&h=462",
      foto: [
        "https://img.elo7.com.br/product/zoom/2C1041D/arte-de-menu-digital-floral.jpg",
        "https://blog.atau.com.br/wp-content/uploads/2019/03/menu-degustacao-como-montar.jpg",
        "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000010ZApnEAG/5d795f99e4b09720b04d6561.jpg&w=710&h=462"
      ]
    };
  },
  methods: {
    slideShow() {
      setInterval(() => {
        setTimeout(() => {
          this.saiEntra = true;
          this.i++;
          if (this.i > 2) this.i = 0;
          this.imagem = this.foto[this.i];
        }, 500);
        this.saiEntra = false;
      }, 5000);
    }
  },
  created() {
    this.slideShow();
  }
};
</script>

<style scoped>
.saida {
  position: relative;
  animation: saidas 3s;
}
@keyframes saidas {
  from {
    left: -50px;
    opacity: 1;
  }
  to {
    left: -120px;
    opacity: .3;
  }
}
.entrada {
  position: relative;
  animation: entradas 6s;
}
@keyframes entradas {
  from {
    left: 0px;
    opacity: .2;
  }
  to {
    left: -50px;
    opacity: 1;
  }
}
img {
  width: 120%;
  position: relative;
  right: 0px;
}
</style>