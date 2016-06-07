<template>
  <div>count: {{ count }}</div>
</template>

<script>
  export default {
    data() {
      return { };
    },
    vuex: {
      getters: {
        count: function (state) {
          return state.count
        }
      }
    }
  }
</script>
