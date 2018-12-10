<template>
  <div class="home">
    <br>
    <h1>DRAGON!</h1>
    <br>
    <section>
      <div class="col-master">
        <h1> MASTER FORMULA</h1>
        <InputCalc msg="Flour" :holder="flour"/>
        <InputCalc msg="Hydro" :holder="water"/>
        <InputCalc msg="Salt" :holder="salt"/>
        <InputCalc msg="Rise" :holder="rise"/>
      </div>
    </section>
  </div>

</template>

<script>
// @ is an alias to /src
import InputCalc from '@/components/InputCalc.vue';

export default {
  name: 'home',
  components: {
    InputCalc,
  },

  data() {
    return {
      flour: 1000,
      water: 600,
      salt: 18,
      rise: 45,
    };
  },

  method: {
    gramConvert(percent) {
      return (percent * this.$data.flour) / 100;
    },
    percentConvert(grams) {
      return (grams / this.$data.flour) * 100;
    },
  },
};

</script>

<style lang="scss">
  html, body, h1, nav {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    background-color: dimgrey;
  }
  nav{
    width: 100%;
  }
  .row {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  input {
    direction: rtl;
    border-radius: 6px;
  }
</style>
