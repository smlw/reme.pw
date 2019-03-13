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
  computed: {
    ...mapGetters(['getAuthUser'])
  }
}
</script>
