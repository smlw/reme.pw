<template lang="pug">
  Layout
    template(v-slot:content='')
      .d Add profile page
</template>

<script>
import Layout from '@/layouts/main'
export default {
  name: 'Add profile',
  metaInfo: {
    title: 'Add profile'
  },
  components: { Layout }
}
</script>

<style lang="stylus" scope>

</style>
