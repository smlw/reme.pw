<template lang="pug">
  v-app
    // leftside bar
    keep-alive
      v-navigation-drawer(app v-model="drawer")
        MenuUserAvatar
        MenuUserProfiles
        MenuUserActions

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
    v-footer(dark='', height='auto', app)
      v-card.flex(flat='', tile='')
        v-card-actions.grey.darken-0.justify-center © 2019 — RememberMe
</template>

<script>
import MenuUserAvatar from '@/components/Menu/MenuUserAvatar'
import MenuUserProfiles from '@/components/Menu/MenuUserProfiles'
import MenuUserActions from '@/components/Menu/MenuUserActions'
export default {
  components: {MenuUserAvatar, MenuUserProfiles, MenuUserActions},
  data () {
    return {
      drawer: null,
      menuItems: [
        {title: 'Добавить профайл', to: '/add', icon: 'add_circle'},
        {title: 'Мои профайлы', to: '/dashboard', icon: 'list_alt'},
        {title: 'Календарь', to: '/calendar', icon: 'calendar_today'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
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
