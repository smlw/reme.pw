<template lang="pug">
  Layout
    template(v-slot:content='' v-if="getOneProfile.profile")
      v-layout(align-center='', justify-start='', row='', fill-height='')
        .profile__main-info
          v-avatar(
            :tile="false"
            size="64"
            color="grey"
          )
            img(
              src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
              alt="avatar"
            )
        v-layout(align-start='', justify-center='', column='', fill-height='')
          h1.title.ml-4 {{ getOneProfile.profile.fullName }}
          h2.subheading.ml-4 {{ getOneProfile.profile.birthday }} — {{getOneProfile.profile.birthday}} год
      .customSection__wrapper.mt-4
        masonry(
          :cols="{default: 3, 1000: 3, 768: 2, 400: 1}"
          :gutter="{default: '30px', 768: '15px'}"
        )
          v-flex.customSection.item.box-shadow.mb-3(
            v-for="(section, index) in sections"
            :key='index'
          )
            // Header of section
            v-layout(align-center='', justify-space-between='', row='', fill-height='').title__actions.pl-3.pt-2.pb-2
              .title {{ section.sectionTitle }}
              .title__actions
                v-btn(fab, dark, outline, small, color='indigo', @click="section.showAddForm = !section.showAddForm")
                  v-icon(dark='') add
                v-btn(fab, dark, outline, small, color='teal')
                  v-icon(dark='') edit
            v-divider
            // Print items
            .section-items.pa-2(v-if="section.items.length")
              .section-items__item
                v-chip(color='blue', text-color='white',
                v-for="(item, index) in section.items"
                :key='index'
              ) {{item.name}}

            // If nobody items
            .section-items__empty.pa-4.text-xs-center(v-else)
              span Пока тут пусто.
              a(@click="section.showAddForm = !section.showAddForm")  Добавить

            // Form for add item
            .add-item-form(v-if="section.showAddForm")
              v-divider
              v-layout(align-center='', justify-center='', row='', fill-height='')
                v-form(ref='form', lazy-validation='', @submit.prevent='')
                  v-text-field(
                    :label="`${section.sectionTitle}`"
                  )
                v-btn(small color="primary") Добавить
</template>

<script>
import Layout from '@/layouts/main'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      profileId: this.$route.params.id,
      showHobbies: false,
      sections: [
        {
          sectionTitle: 'Хобби',
          sectionAlias: 'hobbies',
          showAddForm: false,
          items: [
            {name: 'Программирование'},
            {name: 'Качалка'},
            {name: 'Настольный теннис'},
            {name: 'Вечеринки'}
          ]
        },
        {
          sectionTitle: 'Алкоголь',
          sectionAlias: 'alcho',
          showAddForm: false,
          items: []
        },
        {
          sectionTitle: 'Автомобили',
          sectionAlias: 'automobile',
          showAddForm: false,
          items: [
            {name: 'Лада Гранта'},
            {name: 'BMW'}
          ]
        },
        {
          sectionTitle: 'Цветы',
          sectionAlias: 'flowers',
          showAddForm: false,
          items: [
            {name: 'Розы'},
            {name: 'Тюльпаны'},
            {name: 'Акации'},
            {name: 'Мимозы'},
            {name: 'Синие розы'},
            {name: 'Ландыши'}
          ]
        },
        {
          sectionTitle: 'Спорт',
          sectionAlias: 'sport',
          showAddForm: false,
          items: [
            {name: 'Легкая атлетика'},
            {name: 'Шашки'}
          ]
        },
        {
          sectionTitle: 'Фильмы',
          sectionAlias: 'film',
          showAddForm: false,
          items: [
            {name: 'Комедии'},
            {name: 'Мелодрамы'},
            {name: 'Ужастики'}
          ]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('loadProfileOnce', this.profileId)
  },
  computed: {
    ...mapGetters(['getOneProfile'])
  },
  name: 'Profile',
  metaInfo: {
    title: 'Profile'
  },
  components: { Layout }
}
</script>

<style lang="stylus" scoped>
.box-shadow
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)
    background #fff
</style>
