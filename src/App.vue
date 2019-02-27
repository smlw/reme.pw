<template lang="pug">
  v-app
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
    v-toolbar(app)
      router-link.features-link(
        to="/add-profile"
      )
        v-layout(align-center justify-start row fill-height)
          v-icon add_circle
          span Добавить профайл
      router-link.features-link(
        to="/profiles"
      )
        v-layout(align-center justify-start row fill-height)
          v-icon list_alt
          span Мои профайлы
    v-content
      v-container(fluid)
        .masonry(v-masonry, transition-duration='1s')
          v-card(
            v-masonry-tile,
            v-for='profile in items',
            :key='profile.id'
            )
            v-img(:src="`${profile.avatar}`", aspect-ratio='2')
            v-card-title(primary-title)
              div
                h4.headline.mb-0 {{profile.title}}
                h5.profile-info.mb-0 20 лет
                div card_text
            v-card-actions
              v-layout(align-start justify-space-between row fill-height)
                router-link.profile-links(
                  :to="`profile/${profile.id}`"
                )
                  v-btn(flat='', color='orange') Смотреть
                v-btn(flat='', color='red')
                  v-icon(red) delete_forever

    v-footer(app)
</template>

<script>
export default {
  data: () => ({
    tile: false,
    items: [
      { id: 1, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', icon: true },
      { id: 2, title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
      { id: 3, title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      { id: 4, title: 'Alid Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
    ]
  })
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

.features-link
  text-decoration none
  margin 0 15px 0 0
  padding 5px
  &:last-child
    margin 0
  &:hover
    background #ECEFF1
    border-radius 5px
  i
    margin 0 5px 0 0
</style>
