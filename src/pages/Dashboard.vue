<template lang="pug">
  v-content
    v-container(fluid)
      masonry(
        :cols="{default: 4, 1000: 3, 768: 2, 400: 1}"
        :gutter="{default: '30px', 768: '15px'}"
      )
        div(v-for="(profile, index) in items" :key="index")
          v-card.item
            v-img(:src="`${profile.avatar}`" aspect-ratio='1.5')
            v-card-title(primary-title)
              div
                h4.card-headline.mb-0 {{ profile.title }}
                h5.profile-info.mb-0 20 лет
            v-card-actions
              v-layout(align-start justify-space-between row fill-height)
                router-link.profile-links(
                  :to="`${profile.id}`"
                )
                  v-btn(flat='', color='orange') Смотреть
                v-btn(flat='', color='red')
                  v-icon(red) delete_forever
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
.profile-links
  text-decoration none
  color black
  display flex
  width 100%

.item
  margin 30px 0
  @media screen and (max-width: 768px)
    margin 15px 0

.card
  &-headline
    font-size 16px

</style>
