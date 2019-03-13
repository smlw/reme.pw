<template lang="pug">
  .d-block
    a(@click="get" href="http://localhost:3001/auth/vkontakte") GO
    router-view
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  metaInfo: {
    title: 'Index',
    titleTemplate: '%s | Remember Me'
  },
  data () {
    return {
      id: null
    }
  },
  created () {
    // this.$store.dispatch('authVkontakte')
  },
  beforeCreate () {
    // this.$store.dispatch('loadProfiles')
  },
  methods: {
    get () {
      axios({
        method: 'GET',
        'url': 'http://localhost:3001/',
        withCredentials: true
      })
        .then(result => {
          console.log(result)
          this.$session.set('sessionUUID', result.data.sessionUUID)
          console.log(result.data.sessionUUID)
        }, error => {
          console.error(error.response.data)
        })
    },
    post () {
      axios({
        method: 'POST',
        'url': 'http://localhost:3001/',
        data: { sessionUUID: this.$session.get('sessionUUID') },
        headers: { 'content-type': 'application/json' },
        withCredentials: true
      })
        .then(result => {
          console.log(result.data)
        })
        .catch(error => {
          console.error(error.response.data)
        })
    }
  }
}
</script>

<style lang="stylus">
@import 'assets/stylus/main.styl'
</style>
