<template>
  <div id="app">
    <header>
      <div class="cabecario">
        <button class="btn btn-standart" @click="CadastroUsuario">{{$store.state.logado || name }}</button>
        <h1 @click="home" class="titulo">Famiglia Mancini</h1>
      </div>
      <router-view class="transicao-geral"></router-view>
    </header>
  </div>
</template>
     
     
<script>
export default {
  name: "app",
  data() {
    return {
      name: "Login/Usuario"
    };
  },
  methods: {
    CadastroUsuario() {
      this.$router.push("/login");
    },
    testando() {
      console.log("testando");
    },
    home() {
      this.$router.push("/");
    }
  }
};
</script>
    

<style>
* {
  margin: 0;
}
header {
  display: inline;
}

a {
  text-decoration: none;
}

.titulo {
  text-align: center;
  cursor: pointer;
}
form {
  margin-left: 20px;
}
form input {
  display: block;
  font-size: 18px;
  margin-bottom: 20px;
  height: 40px;
  width: 80%;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
.container-cadastro {
  width: 75%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border: solid 0.5px black;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
}

li + li {
  margin: 50px;
}
.cabecario {
  display: grid;
  grid-template-columns: 90% 1fr;
}
h1 {
  text-align: center;

  text-align: center;
}
.btn-close-screen {
  position: absolute;
  top: 0px;
  right: 20px;
  border: none;
  font-size: 40px;
  background: none;
  cursor: pointer;
}
.btn-standart {
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 15px;
}
.btn {
  position: absolute;
  right: 18px;
  top: 18px;
}
li {
  list-style: none;
}
.transicao-geral {
  position: relative;
  animation: vitrine 1s;
}

@keyframes vitrine {
  from {
    left: 30px;
    opacity: 0;
  }
  to {
    left: 0px;
    opacity: 1;
  }
}
input:hover {
  animation: increaseInput 2s 2;
 animation-direction: alternate;
}
@keyframes increaseInput{
  from{
     transform: scale(1, 1);
    
  }
  to{
     transform: scale( 1.1);
     
  }
}




.increase:hover {
 animation: increaseImg 1s 2;
 animation-direction: alternate;
}
@keyframes increaseImg{
  from{
     transform: scale(1, 1);
  }
  to{
     transform: scale(1.1, 1.1);
  }
}
</style>
  
      
     

   











