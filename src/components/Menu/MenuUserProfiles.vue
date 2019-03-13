<template lang="pug">
  .user-profiles
    v-list
      v-list-group(prepend-icon='account_circle', value='true')
        template(v-slot:activator='')
          v-list-tile
            v-list-tile-title Профайлы
        transition-group(v-if="getProfiles.length != 0" name="fade", tag="div")
            v-list-tile.pt-1.pb-1(v-for='(profile, index) in getProfiles', :key='profile.id')
              router-link.profile-links(
                :to="`profile/${profile.id}`"
              )
                v-layout(align-center='', justify-space-between='', row='', fill-height='')
                  v-list-tile-content
                    v-list-tile-title(v-text='profile.fullName')
                  v-list-tile-avatar
                    img(src="https://joeschmoe.io/api/v1/random")
        div(v-else)
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
