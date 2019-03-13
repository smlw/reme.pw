<template lang="pug">
  // User Settings
  .user-actions
    v-list
      v-list-group(prepend-icon='settings', value='true')
        template(v-slot:activator='')
          v-list-tile
            v-list-tile-title Настройки
        v-list-group(sub-group='', no-action='')
          template(v-slot:activator='')
            v-list-tile
              v-list-tile-title Напоминания
          v-list-tile
            v-list-tile-title Дни рождения
            v-list-tile-action
              v-switch(color='purple')
          v-list-tile
            v-list-tile-title Праздники
            v-list-tile-action
              v-switch(color='purple')
        v-list-group(sub-group='', no-action='')
          template(v-slot:activator='')
            v-list-tile
              v-list-tile-title Аккаунт
          v-list-tile
            v-list-tile-title Изменить пароль
            v-list-tile-action
              v-switch(color='purple')
      v-list-group.hidden-lg-and-up(prepend-icon='view_list', value='true')
        template(v-slot:activator='')
          v-list-tile
            v-list-tile-title Действия

        v-list-tile(v-for='(item, i) in menuItems', :key='i', @click='')
          router-link.features-link(:to="`${item.to}`")
            v-list-tile
              v-list-tile-title {{ item.title }}
              v-list-tile-action
                v-icon(right) {{ item.icon }}
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {title: 'Добавить профайл', to: '/add', icon: 'add_circle'},
        {title: 'Мои профайлы', to: '/', icon: 'list_alt'},
        {title: 'Календарь', to: '/calendar', icon: 'calendar_today'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-list
  padding 0
.features-link
  text-decoration none
  width 100%
  color: rgba(0,0,0,.87)
</style>
