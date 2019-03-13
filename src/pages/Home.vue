<template lang="pug">
  Layout
    template(v-slot:content='')
      div(v-if="checkUser") User
      div(v-else)
        a(@click="getAuth") link to vk
</template>

<script>
import Layout from '@/layouts/main'
import {mapGetters} from 'vuex'
export default {
  methods: {
    getAuth () {
      window.location.href = 'http://localhost:3001/auth/vkontakte'
    }
  },
  computed: {
    ...mapGetters(['checkUser'])
  },
  components: { Layout }
}
</script>

<style lang="stylus">

</style>
