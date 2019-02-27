<template lang="pug">
  .wrapper
    header
      v-app#inspire
        .text-xs-center
          v-menu(v-model='menu', :close-on-content-click='false', :nudge-width='200', offset-x='',
                transition="slide-y-transition",
                bottom,
                right)
            v-btn(slot='activator', color='indigo', dark='')
              | Menu as Popover
            v-card
              v-list
                v-list-tile(avatar='')
                  v-list-tile-avatar
                    img(src='https://cdn.vuetifyjs.com/images/john.jpg', alt='John')
                  v-list-tile-content
                    v-list-tile-title John Leider
                    v-list-tile-sub-title Founder of Vuetify.js
                  v-list-tile-action
                    v-btn(:class="fav ? 'red--text' : ''", icon='', @click='fav = !fav')
                      v-icon favorite
              v-divider
              v-list
                v-list-tile
                  v-list-tile-action
                    v-switch(v-model='message', color='purple')
                  v-list-tile-title Enable messages
                v-list-tile
                  v-list-tile-action
                    v-switch(v-model='hints', color='purple')
                  v-list-tile-title Enable hints
              v-card-actions
                v-spacer
                v-btn(flat='', @click='menu = false') Cancel
                v-btn(color='primary', flat='', @click='menu = false') Save
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true
  })
}
</script>

<style lang="stylus" scoped>

</style>
