<template>
  <div>
    <h2>Login</h2>
    <form>
      <label for="name">Login</label>
      <input type="text" name="nome" v-model="login.login" />
      <label for="numeroMesa">Password</label>
      <input type="text" name="cargo" v-model="login.passoword" />
      <button @click.prevent="logando" class="btn-standart">Logar</button>
      <p @click="telaDeCadatro">Caso não seja usuário clique aqui para se cadastrar</p>
    </form>
  </div>
</template>

<script>
import { api } from "@/mixins/fetchData";
export default {
  data() {
    return {
      log: "",
      login: {
        login: "",
        passoword: ""
      }
    };
  },
  methods: {
    async logando() {
      await api.get(`usuario/${this.login.login}`).then(r => {
        this.log = r.data;
      });
      await this.logar();
    },
    logar() {
      if (this.login.login === this.log.id) {
        this.$store.commit("LOGAR_USUARIO", this.log.name);
        this.$router.push("/");
      } else {
        alert(
          "Sua senha ou login estão incorretos tente novamente ou crie uma conta de usuario"
        );
      }
    },
    telaDeCadatro() {
      this.$router.push("/admin");
    }
  }
};
</script>
      
<style scoped>
div {
  width: 550px;
  border-radius: 15px;
  border: solid 0.5px black;
  margin: 30px auto;
  padding: 15px;
}

h2 {
  text-align: center;
}
p {
  color: red;
  cursor: pointer;
  text-align: center;
  margin: 0;
  font-size: 14px;
}
</style>
      
     
      
       

        
     
        
        
       
