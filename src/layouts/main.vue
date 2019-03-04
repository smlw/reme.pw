<template lang="pug">
  v-app
    // leftside bar
    v-navigation-drawer(
      app
      v-model="drawer"
      )
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
        v-list
          v-list-group(prepend-icon='account_circle', value='true')
            template(v-slot:activator='')
              v-list-tile
                v-list-tile-title Профили
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
          v-list-group.hidden-lg-and-up(prepend-icon='account_circle', value='true')
            template(v-slot:activator='')
              v-list-tile
                v-list-tile-title Действия
            v-list-tile(v-for='(item, i) in menuItems', :key='i', @click='')
              router-link.features-link(
                :to="`${item.to}`"
              )
                v-layout(align-start='', justify-space-between='', row='')
                  span {{ item.title }}
                  v-icon {{ item.icon }}
        v-divider
        v-list
          v-list-tile
            v-list-tile-action
              v-switch(color='purple')
            v-list-tile-title Напоминания о днях рождения
    // Topside bar
    v-toolbar(app)
      v-layout.hidden-lg-and-up(align-center='', justify-space-between='', row='', fill-height='')
        v-icon(@click.stop='drawer = !drawer') menu
        .logo() Logo
      v-layout(align-center='', justify-start='', row='', fill-height='')
        router-link.features-link.hidden-md-and-down(
          v-for='(item, index) in menuItems',
          :key='index',
          :to="`${item.to}`")
          v-layout(align-center justify-start row fill-height)
            v-icon {{ item.icon }}
            span {{ item.title }}
    // Content wrapper
    v-content
      v-container(fluid)
        slot(name='content')
    v-footer(app) Footer
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      tile: false,
      items: [
        { id: 1, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { id: 2, title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { id: 3, title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { id: 4, title: 'Ali2d Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        { id: 4, title: 'Ali2d Connor3s', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
      ],
      menuItems: [
        {title: 'Добавить профайл', to: '/add', icon: 'add_circle'},
        {title: 'Мои профайлы', to: '/dashboard', icon: 'list_alt'},
        {title: 'Календарь', to: '/calendar', icon: 'calendar_today'}
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
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

.features-link
  text-decoration none
  margin 0 15px 0 0
  padding 5px
  width 100%
  @media screen and (min-width: 1264px)
    width auto
  &:last-child
    margin 0
  &:hover
    background #ECEFF1
    border-radius 5px
  i
    margin 0 5px 0 0
</style>
