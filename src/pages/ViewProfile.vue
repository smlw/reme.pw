<template lang="pug">
  Layout
    template(v-slot:content='' v-if="getOneProfile")
      v-flex(xs12, align-center, justify-center='', layout='')
        v-flex.text-xs-right(xs12, lg4, align-self-center)
          v-chip(color='orange', text-color='white')
            v-avatar.orange.darken-4 0
            | Идей подарков
          v-chip(color='indigo', text-color='white')
            v-avatar.indigo.darken-4 8
            | Увлечений
          v-flex(xs12)
            //- .caption Действия
            v-tooltip(bottom='')
              v-btn(flat='', icon='', slot='activator' color='pink')
                v-icon bookmark
              span Добавить в закладки
            v-tooltip(bottom='')
              v-btn(flat='', icon='', slot='activator' color='indigo')
                v-icon share
              span Поделиться
            v-tooltip(bottom='')
              v-btn(flat='', icon='', slot='activator' color='deep-orange')
                v-icon edit
              span Редактировать профиль
        v-flex.text-xs-center(xs12, lg4)
          v-avatar(tile, size='200')
            img(:src='`https://joeschmoe.io/api/v1/${getOneProfile.profile.avatar}`', alt='avatar')
        v-layout(align-start='', justify-space-between='', column='', fill-height='')
          .profile-info_main
            h1.title {{ getOneProfile.profile.fullName }}
              span.subheading.ml-3 21 год
            v-flex(xs12).mt-2.mb-2
              .profile-info_contacts
                v-layout(align-center, justify-start, row, fill-height).profile-info.contact_line.pt-1.pb-1
                  v-icon.mr-3(color='primary' small) fa-vk
                  a(href="https://vk.com/smlwmy") https://vk.com/smlwmy
                v-layout(align-center, justify-start, row, fill-height).profile-info.contact_line.pt-1.pb-1
                  v-icon.mr-3(color='red lighten-1' small) fa-instagram
                  a() + Добавить ссылку
                v-layout(align-center, justify-start, row, fill-height).profile-info.contact_line.pt-1.pb-1
                  v-icon.mr-3(color='grey darken-1' small) fa-phone
                  span 89826582717

      //- v-layout(align-center='', justify-start='', row='', fill-height='')
      //-   .profile__main-info
      //-     v-avatar(
      //-       :tile="false"
      //-       size="64"
      //-       color="grey"
      //-     )
      //-       img(
      //-         :src="`https://joeschmoe.io/api/v1/${getOneProfile.profile.avatar}`"
      //-         alt="avatar"
      //-       )
      //-   v-layout(align-start='', justify-center='', column='', fill-height='')
      //-     h1.title.ml-4 {{ getOneProfile.profile.fullName }}
      //-     h2.subheading.ml-4 {{ getOneProfile.profile.birthday }} — {{year}}
      //- .customSection__wrapper.mt-4
      //-   masonry(
      //-     :cols="{default: 3, 1000: 3, 768: 2, 400: 1}"
      //-     :gutter="{default: '30px', 768: '15px'}"
      //-   )
      //-     v-flex.customSection.item.box-shadow.mb-3(
      //-       v-for="(section, index) in getOneProfile.profile.sections"
      //-       :key='index'
      //-     )
      //-       // Header of section
      //-       v-layout(align-center='', justify-space-between='', row='', fill-height='').title__actions.pl-3.pt-2.pb-2
      //-         .title {{ section.sectionTitle }}
      //-         .title__actions
      //-           v-btn(fab, dark, outline, small, color='indigo', @click="section.showAddForm = !section.showAddForm")
      //-             v-icon(dark='') add
      //-           v-btn(fab, dark, outline, small, color='teal')
      //-             v-icon(dark='') edit
      //-       v-divider
      //-       // Print items
      //-       .section-items.pa-2(v-if="section.items.length")
      //-         .section-items__item
      //-           v-chip(color='blue', text-color='white',
      //-           v-for="(item, index) in section.items"
      //-           :key='index'
      //-         ) {{item.name}}

      //-       // If nobody items
      //-       .section-items__empty.pa-4.text-xs-center(v-else)
      //-         span Пока тут пусто.
      //-         a(@click="section.showAddForm = !section.showAddForm")  Добавить

      //-       // Form for add item
      //-       .add-item-form(v-if="section.showAddForm")
      //-         v-divider
      //-         v-layout(align-center='', justify-center='', row='', fill-height='')
      //-           v-form(ref='form', lazy-validation='', @submit.prevent='')
      //-             v-text-field(
      //-               :label="`${section.sectionTitle}`"
      //-             )
      //-           v-btn(small color="primary") Добавить
</template>

<script>
import Layout from '@/layouts/main'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      profileId: this.$route.params.id,
      cases: [2, 0, 1, 1, 1, 2],
      year: null
    }
  },
  created () {
    this.$store.dispatch('loadProfileOnce', this.profileId)
  },
  computed: {
    ...mapGetters(['getOneProfile'])
  },
  // methods: {
  //   declOfNum (number, titles) {
  //     return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : this.cases[(number % 10 < 5) ? number % 10 : 5] ]
  //   }
  // },
  components: { Layout }
}
</script>

<style lang="stylus" scoped>
.box-shadow
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)
    background #fff
</style>
