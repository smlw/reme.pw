<template lang="pug">
  v-toolbar(app)
    router-link.features-link(
      v-for='(item, index) in menuItems',
      :key='index',
      :to="`${item.to}`")
      v-layout(align-center justify-start row fill-height)
        v-icon {{ item.icon }}
        span {{ item.title }}
</template>

<script>
export default {
  data () {
    return {
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
