<template>
  <div id="app">
    <notifications/>
    <router-view/>
  </div>
</template>

<script>
import store from './vuex/index'

export default {
  name: 'App',
  store,
  data () {
    return {
    }
  },
  created () {
    this.$store.commit('getRooms')
  }
}
</script>
