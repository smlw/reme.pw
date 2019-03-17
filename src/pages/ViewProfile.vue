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
      v-divider

      v-layout.mt-3(align-start='', justify-center='', row='', fill-height='')
        .profile-info_interests
          v-layout.mb-3(align-center='', justify-start='', row='', fill-height='')
            span.headline Интересы
            v-tooltip(v-if="!isEdit" bottom)
              v-btn(flat='', icon='', slot='activator' color='grey darken-1' @click="interestsEdit()")
                v-icon() edit
              span Редактировать
            v-tooltip(v-else-if="isEdit" bottom)
              v-btn(flat='', icon='', slot='activator' color='grey darken-1' @click="interestsCancel()")
                v-icon() close
              span Отмена
            //- v-tooltip(v-else bottom)
            //-   v-btn(flat='', icon='', slot='activator' color='grey darken-1' @click="interestsSave()")
            //-     v-icon() save
            //-   span Сохранить изменения
            v-tooltip(bottom='')
              v-btn(flat='', icon='', slot='activator' color='grey darken-1')
                v-icon view_list
              span Список интересов
          masonry(
            :cols="{default: 2, 1000: 2, 768: 2, 400: 1}"
            :gutter="{default: '10px', 768: '5px'}"
            key="masonry"
          )
            .profile-info_interest-section(v-for="(section, index) in sections" :key="section.id")
              v-chip(:color='section.color', :text-color='section.textColor')
                v-avatar
                  v-icon {{ section.icon }}
                span {{ section.name }}
              .profile-info_interest-chips.pa-2
                transition-group(name="fade", tag="div")
                  v-chip(
                        v-for="(chip, index) in section.chips",
                        :key="chip.id" label, outline,
                        :close='chip.close'
                        v-model="chip.isActual"
                        :color='chip.color') {{ chip.chipName }}

            .profile-info_interest-section
              v-chip(color='orange', text-color='white')
                v-avatar
                  v-icon fa-film
                span Кино, видео TV
              .profile-info_interest-chips.pa-2
                v-chip(label='', outline='', color='orange') Ужасы
                v-chip(label='', outline='', color='orange') Мелодраммы
            .profile-info_interest-section
              v-chip(color='deep-purple lighten-2', text-color='white')
                v-avatar
                  v-icon fa-futbol-o
                span Спорт
              .profile-info_interest-chips.pa-2
                v-chip(label='', outline='', color='deep-purple lighten-2') Футбол
                v-chip(label='', outline='', color='deep-purple lighten-2') Манчестер-Юнайтед
                v-chip(label='', outline='', color='deep-purple lighten-2') Бейсбол
            .profile-info_interest-section
              v-chip(color='cyan darken-2', text-color='white')
                v-avatar
                  v-icon fa-globe
                span Отдых и путещевсвтия
              .profile-info_interest-chips.pa-2
                v-chip(label='', outline='', color='cyan darken-2') Австралия
                v-chip(label='', outline='', color='cyan darken-2') Уганда
                v-chip(label='', outline='', color='cyan darken-2') Индонезия
                v-chip(label='', outline='', color='cyan darken-2') Ямайка
        .profile-info_ideas
          h2.headline Идеи
</template>

<script>
import Layout from '@/layouts/main'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      profileId: this.$route.params.id,
      cases: [2, 0, 1, 1, 1, 2],
      year: null,
      isEdit: false,
      isChanges: false,
      actionIcons: [
        {ico: 'edit'},
        {ico: 'save'},
        {ico: 'close'}
      ],
      sections: [
        {
          id: 1,
          name: 'Музыка',
          icon: 'fa-music',
          color: 'indigo',
          textColor: 'white',
          chips: [
            { id: 1, chipName: 'Инди', color: 'indigo', close: false, isActual: true },
            { id: 2, chipName: 'Шансон', color: 'indigo', close: false, isActual: true }
          ]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('loadProfileOnce', this.profileId)
  },
  methods: {
    interestsEdit () {
      this.isEdit = true
      this.sections.map(section => {
        section.chips.map(chip => {
          chip.close = true
        })
      })
    },
    interestsCancel () {
      this.isEdit = false
      this.sections.map(section => {
        section.chips.map(chip => {
          chip.close = false
        })
      })
    },
    deleteChip () {
      this.isChanges = true
      this.sections.map(section => {
        section.chips.map(chip => {
          chip.isActual = !chip.isActual
        })
      })
    }
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
.profile-info_interests,
.profile-info_ideas
  width 50%
.box-shadow
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)
  background #fff
</style>
