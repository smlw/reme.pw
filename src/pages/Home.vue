<template lang="pug">
  Layout
    template(v-slot:content='')
      div(v-if="checkUser")
        h1(
          class="display-1"
        ) Мои профайлы
        //- .profiles(v-for="(profile, index) in getProfiles" :key="index")
        //-   span {{ profile.fullName }}
        masonry(
          :cols="{default: 4, 1000: 3, 768: 2, 400: 1}"
          :gutter="{default: '30px', 768: '15px'}"
        )
          div(v-for="(profile, index) in getProfiles" :key="index")
            v-card.item
              v-img(src="https://joeschmoe.io/api/v1/random", height='200px')
              v-card-title(primary-title='')
                div
                  .headline {{ profile.fullName }}
                  span.grey--text {{ profile.birthday }} лет. {{ profile.profession }}
              v-card-actions
                router-link.profile-links(
                  :to="`profile/${profile.id}`"
                )
                  v-btn(flat='') Смотреть
      div(v-else)
        a(@click="getAuth") link to vk
</template>

<script>
import Layout from '@/layouts/main'
import {mapGetters} from 'vuex'
export default {
  methods: {
    getAuth () {
      window.location.href = 'http://localhost:3001/auth/vkontakte'
    }
  },
  computed: {
    ...mapGetters(['checkUser', 'getProfiles'])
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
