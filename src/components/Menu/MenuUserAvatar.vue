<template lang="pug">
  .user-avatar
    v-avatar(
      :tile="tile"
      :size="48"
      color="grey"
    )
      img(
        src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
        alt="avatar"
      )
    span Самойлов Александр
</template>

<style lang="stylus">
.user-avatar
  padding 15px

.v-avatar
  margin 0 15px 0 0
</style>

<script>
export default {
  data () {
    return {
      tile: false
    }
  }
}
</script>
