<template lang="pug">
  .container
    v-app#inspire
      .text-xs-center
        v-menu(offset-y='')
          v-btn(slot='activator', color='primary', dark='')
            | Dropdown
          v-list
            v-list-tile(v-for='(item, index) in items', :key='index', @click='')
              v-list-tile-title {{ item.title }}

</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  })
}
</script>

<style lang="stylus" scoped>

</style>
