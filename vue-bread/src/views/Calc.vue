<template>
  <div class="home">
    <br>
    <h1>CALCULATOR!</h1>
    <br>
    <section>
      <div class="col-master">
        <h1> MASTER FORMULA</h1>
        <div class="row">
          <strong>Flour</strong>
          <label><input id="master-flour-gram">g</label>
          <label><input id="master-flour-percent" readonly placeholder="100">%</label>
        </div>
        <div class="row">
          <strong>Hydro</strong>
          <label><input id="master-hydro-gram">g</label>
          <label><input id="master-hydro-percent">%</label>
        </div>
        <div class="row">
          <strong>Salt</strong>
          <label><input id="master-salt-gram">g</label>
          <label><input id="master-salt-percent">%</label>
        </div>
      </div>
    </section>
  </div>

</template>

<script>

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


<!--<script>-->
// @ is an alias to /src
import input from '@/components/input.vue';
// import calc from '@/components/calc.vue';
// import HelloWorld from '@/components.vue.';

<!--export default {-->
  <!--name: 'home',-->
  <!--components: {-->
    <!--HelloWorld,-->
  <!--},-->
<!--};-->
<!--</script>-->
