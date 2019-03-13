<template lang="pug">
  Layout
    template(v-slot:content='')
      a() Vk auth
</template>

<script>
import Layout from '@/layouts/main'
export default {
  data () {
    return {
      sessionUUID: this.$session.get('sessionUUID')
    }
  },
  mounted () {
    this.$store.dispatch('getUserProfile', this.sessionUUID)
    // axios({
    //   method: 'POST',
    //   'url': 'http://localhost:3001/',
    //   data: { sessionUUID: this.$session.get('sessionUUID') },
    //   headers: { 'content-type': 'application/json' },
    //   withCredentials: true
    // })
    //   .then(result => {
    //     console.log(result.data)
    //   })
    //   .catch(error => {
    //     console.error(error.response.data)
    //   })
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
