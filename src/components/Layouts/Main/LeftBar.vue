<template lang="pug">
  v-navigation-drawer(app)
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
    .user-profiles
      v-divider
      v-list
        v-list-tile(v-for='item in items', :key='item.title', avatar='', @click='')
          router-link.profile-links(
            :to="`profile/${item.id}`"
          )
            v-list-tile-action
              v-icon(v-if='item.icon', color='pink') star
            v-list-tile-content
              v-list-tile-title(v-text='item.title')
            v-list-tile-avatar
              img(:src='item.avatar')
      v-divider
      v-list
        v-list-tile
          v-list-tile-action
            v-switch(color='purple')
          v-list-tile-title Напоминания о днях рождения
</template>

<script>
export default {
  data () {
    return {
      tile: false,
      items: [
        { id: 1, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', icon: true },
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
.user-avatar
  padding 15px

.v-avatar
  margin 0 15px 0 0

.profile-links
  text-decoration none
  color black
  display flex
  width 100%

</style>
