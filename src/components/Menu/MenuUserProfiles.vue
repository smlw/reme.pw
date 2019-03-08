<template lang="pug">
  .user-profiles
    v-list
      v-list-group(prepend-icon='account_circle', value='true')
        template(v-slot:activator='')
          v-list-tile
            v-list-tile-title Профили
        v-list-tile(v-for='profile in getProfiles', :key='profile.title', avatar='', @click='')
          router-link.profile-links(
            :to="`profile/${profile.id}`"
          )
            v-list-tile-content
              v-list-tile-title(v-text='profile.fullName')
            v-list-tile-avatar
              img(:src='profile.avatar')
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['getProfiles'])
  }
}
</script>

<style lang="stylus" scoped>
.profile-links
  text-decoration none
  color black
  display flex
  width 100%
.v-list
  padding 0
</style>
