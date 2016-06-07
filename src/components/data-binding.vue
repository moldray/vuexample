<template lang="jade">
  p.text {{ msg }}
  input.text(type="text", v-model="msg")
</template>

<script>
  export default {
    data(){
      return {
        msg: 'Try to change me !'
      };
    }
  }
</script>

<style lang="less" scoped>
.text {
  font-size: 20px;
  line-height: 2;
}
</style>
