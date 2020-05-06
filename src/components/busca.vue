<template>
  <section>
    <form>
      <input name="busca" type="text" v-model="textoDeBusca" />
      <input class="lupa" @click.prevent="buscandoPratos"/>
    </form>
  </section>
</template>

<script>
export default {
  name: "busca",

  computed: {
    url() {
      return `?q=${this.textoDeBusca}`;
    }
  },
  data() {
    return {
      textoDeBusca: ""
    };
  },
  methods: {
    buscandoPratos() {
      this.$emit("sendUrl", this.url);
    }
  }
};
</script>

<style scoped>
.lupa{
    cursor:pointer;
    position: relative;
    left:-30px;
    top:4px;
    z-index:5;
   width: 30px;
    height: 22px;
    border:none;
    background-image:url("../assets/search.svg");
    background-repeat:no-repeat;
     background-size: cover;
   
    text-indent:-100px;
    
}
form {
  position: relative;
  top: 29px;
  left: -111px;
  width: 200px;
  height: 60px;
  display: flex;
  float: right;
}

input {
  width: 100%;
  height: 35px;

 
  margin: 0;
  background: white;
}
</style>