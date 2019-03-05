<template lang="pug">
  .user-profiles
    v-list
      v-list-group(prepend-icon='account_circle', value='true')
        template(v-slot:activator='')
          v-list-tile
            v-list-tile-title Профили
        v-list-tile(v-for='item in items', :key='item.title', avatar='', @click='')
          router-link.profile-links(
            :to="`profile/${item.id}`"
          )
            v-list-tile-content
              v-list-tile-title(v-text='item.title')
            v-list-tile-avatar
              img(:src='item.avatar')
</template>

<script>
export default {
  data () {
    return {
      items: [
        { id: 1, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { id: 2, title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { id: 3, title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { id: 4, title: 'Ali2d Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        { id: 4, title: 'Ali2d Connor3s', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
      ]
    }
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
