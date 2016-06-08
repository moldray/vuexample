<template>
  <button v-on:click="addHandler">add</button>
</template>
<script>
  import {incrementCounter} from '../store/actions'

  export default {
    vuex: {
      actions: {
        addHandler: incrementCounter,
      }
    }
  }
</script>
