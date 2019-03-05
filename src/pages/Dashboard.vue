<template lang="pug">
  Layout
    template(v-slot:content='')
      h1(
        class="display-1"
      ) Мои профайлы
      masonry(
        :cols="{default: 4, 1000: 3, 768: 2, 400: 1}"
        :gutter="{default: '30px', 768: '15px'}"
      )
        div(v-for="(profile, index) in getProfiles" :key="index")
          v-card.item
            v-img(:src="`${profile.avatar}`", height='200px')
            v-card-title(primary-title='')
              div
                .headline {{ profile.title }}
                span.grey--text {{ profile.age }} лет. {{ profile.profession }}
            v-card-actions
              router-link.profile-links(
                :to="`profile/${profile.id}`"
              )
                v-btn(flat='') Смотреть
</template>

<script>
import Layout from '@/layouts/main'
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['getProfiles'])
  },
  name: 'Dashboard',
  metaInfo: {
    title: 'Dashboard'
  },
  components: { Layout }
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
