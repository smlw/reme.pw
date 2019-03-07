<template lang="pug">
  router-view
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Index',
    titleTemplate: '%s | Remember Me'
  },
  created () {
    this.$store.dispatch('loadProfiles')
  }
}
</script>
