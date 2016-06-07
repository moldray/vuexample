<template lang="jade">
  sender
  receiver
</template>

<script>
import store from '../store'
export default {
  components: {
    sender: require('./sender.vue'),
    receiver: require('./receiver.vue'),
  },
  store,
}
</script>
