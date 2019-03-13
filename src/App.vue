<template lang="pug">
  router-view
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getAuthUser')
  }
}
</script>

<style lang="stylus">
@import 'assets/stylus/main.styl'
</style>
