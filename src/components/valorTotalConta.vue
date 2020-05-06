<template>
  <div>
    <p>Valor total da refeição: {{totalConta}}</p>
  </div>
</template>

<script>
export default {
  name: "valotTotalConta",
  props: ["total"],
  data() {
    return {
      totalConta: 0
    };
  },
  methods: {
    totalBill() {
      this.total.pedidosFeitos.forEach(element => {
        this.totalConta += +element.preco;
       
      });
      return this.totalConta;
    }
  },
  watch: {
    total() {
      this.totalConta = 0;
      this.totalBill();
     
    }
  }
};
</script>

<style>
</style>