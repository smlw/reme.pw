<template lang="pug">
  Layout
    template(v-slot:content='')
      .d testlay22
</template>

<script>
import Layout from '@/layouts/main'
export default {
  name: 'Test',
  metaInfo: {
    title: 'test title'
  },
  components: { Layout }
}
</script>

<style lang="stylus" scoped>

</style>
