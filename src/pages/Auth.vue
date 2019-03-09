<template lang="pug">
  Layout
    template(v-slot:content='')
      a(@click="getVkAuth") Vk auth
</template>

<script>
import Layout from '@/layouts/main'
export default {
  methods: {
    getVkAuth () {
      window.location.href = 'http://localhost:3001/auth/vkontakte/'
    }
  },
  name: 'Test',
  metaInfo: {
    title: 'test title'
  },
  components: { Layout }
}
</script>

<style lang="stylus" scoped>

</style>
