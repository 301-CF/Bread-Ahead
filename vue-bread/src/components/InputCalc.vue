<template>
  <div class="row">
    <strong>{{ msg }}</strong>
    <label><input v-bind:id="msg + '-gram'" @keyup="gramConvert($event.target.value)" :placeholder="holder">g</label>
    <label><input v-bind:id="msg + '-percent'" @keyup="percentConvert($event.target.value)" :placeholder="holder">%</label>
  </div>
</template>

<script>
export default {
  name: 'InputCalc',
  props: {
    holder: Number,
    msg: String,
  },
};
</script>

<style scoped>

</style>
