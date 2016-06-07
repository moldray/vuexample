<template>
  <button v-on:click="addHandler">add</button>
</template>
<script>
  import store from '../store';

  export default {
    data() {
      return {};
    },
    methods: {
      addHandler: function(){
        store.dispatch('INCREMENT', 10)
      }
    }
  }
</script>
