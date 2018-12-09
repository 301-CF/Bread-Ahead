
Vue.component('input-ingredient',{
  props: ['ingredient'],
  template:
    `<div class="form">
      <div class="row">
        <strong>{{ ingredient }}</strong>
        <label><input v-model.number id="master-{{ ingredient }}-gram">g</label>
        <label><input v-model.number id="master-{{ ingredient }}-percent" readonly placeholder="100">%</label>
      </div>
    </div>`,
}),

  export default {
    name: 'calc-input',
  };

calc-app = new Vue({
  el: '.form',
  data: {
    master-{{ingredient}}-gram: 600,
    master-{{ingredient}}-percent: 60,
  },
})
