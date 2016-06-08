<template>
  <div>count: {{ count }}</div>
</template>

<script>
  import {getCount} from '../store/getters'
  export default {
    vuex: {
      getters: {
        count: getCount,
      }
    }
  }
</script>
