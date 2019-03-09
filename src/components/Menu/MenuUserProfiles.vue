<template lang="pug">
  .user-profiles
    v-list
      v-list-group(prepend-icon='account_circle', value='true')
        template(v-slot:activator='')
          v-list-tile
            v-list-tile-title Профили
        transition-group(name="fade", tag="div", v-if="getProfiles.length")
          v-list-tile(v-for='(profile, index) in getProfiles', :key='profile.id')
              router-link.profile-links(
                :to="`profile/${profile.id}`"
              )
                v-list-tile-content
                  v-list-tile-title(v-text='profile.fullName')
                v-list-tile-avatar
                  img(:src='profile.avatar')
        transition-group(v-else name="fade", tag="div")
          v-layout.d-flex.pa-4(align-center='', justify-center='', column='', fill-height='', key="div")
            span Список профайлов пуст.
            v-btn.white--text(color='blue-grey', small, to='/add') Добавить
              v-icon(right='', dark='') add
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      show: true
    }
  },
  computed: {
    ...mapGetters(
      ['getProfiles']
    )
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
