<template lang="pug">
  Layout
    template(v-slot:content='')
      .d user profile {{ $route.params.id }}
</template>

<script>
import Layout from '@/layouts/main'
export default {
  name: 'Profile',
  metaInfo: {
    title: 'Profile'
  },
  components: { Layout }
}
</script>

<style lang="stylus" scope>

</style>
