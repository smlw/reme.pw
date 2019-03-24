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
              span Добавить в закладк и
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
            img(:src='`https://joeschmoe.io/api/v1/${getOneProfile.avatar}`', alt='avatar')
        v-layout(align-start='', justify-space-between='', column='', fill-height='')
          .profile-info_main
            h1.title {{ getOneProfile.fullName }}
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
            v-tooltip(v-if="editMode === 0" bottom)
              v-btn(flat='', icon='', slot='activator' color='grey darken-1' @click="interestsEdit()")
                v-icon() edit
              span Редактировать
            v-tooltip(v-else-if="editMode === 1" bottom)
              v-btn(flat='', icon='', slot='activator' color='grey darken-1' @click="interestsCancel()")
                v-icon() close
              span Отмена
            v-tooltip(v-else-if="editMode === 2" bottom)
              v-btn(flat='', icon='', slot='activator' color='grey darken-1' @click="interestsSave()")
                v-icon() save
              span Сохранить изменения
          masonry(
            :cols="{default: 2, 1000: 2, 768: 2, 400: 1}"
            :gutter="{default: '10px', 768: '5px'}"
            key="masonry"
          )
            .profile-info_interest-section(v-for="(interest, index) in getOneProfile.interest.interest" :key="interest._id")
              v-chip(:color='interest.color', :text-color='interest.textColor')
                v-avatar
                  v-icon {{ interest.icon }}
                span {{ interest.name }}
              .profile-info_interest-chips.pa-2
                v-chip(
                      v-for="(chip, index) in interest.chips",
                      :key="chip._id" label, outline,
                      :close='chip.close'
                      v-model='chip.isActual'
                      @input="removeChip(getOneProfile._id, interest._id, chip._id)"
                      :color='chip.color') {{ chip.chipName }}
              //- v-flex(xs12='')
                //- v-text-field(v-model='message', :append-outer-icon="message ? `fa-send` : `return` ", box='', clear-icon='fa-times', clearable='', label='Музыка', type='text', @click:append-outer='sendMessage(section._id)', @click:prepend='changeIcon', @click:clear='clearMessage')
                //- v-text-field(label='Prepend', @click:append-outer='sendMessage(section._id)' append-outer-icon="fa-send")
        .profile-info_ideas
          h2.headline Идеи
            span {{getOneProfile.interest.interest}}
</template>

<script>
import Layout from '@/layouts/main'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      profileId: this.$route.params.id,
      editMode: 0,
      profile: null,
      show: false,
      message: ''
    }
  },
  created () {
    this.$store.dispatch('loadProfileOnce', this.profileId)
  },
  methods: {
    sendMessage (sectionId) {
      this.$store.dispatch('addChip', {
        sectionId: sectionId,
        message: this.message
      })
      this.clearMessage()
    },
    clearMessage () {
      this.message = ''
    },
    interestsEdit () {
      this.editMode = 1
      this.$store.dispatch('toggleEdit')
    },
    interestsCancel () {
      this.editMode = 0
      this.$store.dispatch('toggleEdit')
    },
    removeChip (profileID, interestID, chipID) {
      console.log(profileID, interestID, chipID)
      this.$store.dispatch('removeChip', {profileID, interestID, chipID})
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
