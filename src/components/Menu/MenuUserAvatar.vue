<template lang="pug">
  .user-avatar()
    v-avatar(
      :tile="tile"
      :size="48"
      color="grey"
    )
      img(
        :src="`${getAuthUser.photoUrl}`"
        alt="avatar"
      )
    span {{ getAuthUser.displayName }}
    div.mt-3
      v-btn(small, color="primary") Настройки
        v-icon(small).ml-2 settings
      v-btn(small, color="normal", @click="logout") Выйти
        v-icon(small).ml-2 exit_to_app
</template>

<style lang="stylus">
.user-avatar
  padding 15px

.v-avatar
  margin 0 15px 0 0
</style>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      tile: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.go('/')
    }
  },
  computed: {
    ...mapGetters(['getAuthUser'])
  }
}
</script>
