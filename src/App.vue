<template lang="pug">
  router-view
</template>

<script>
// import axios from 'axios'
export default {
  created () {
    this.$store.dispatch('loadProfiles')
  }
}
</script>

<style lang="stylus">
@import 'assets/stylus/main.styl'
</style>
