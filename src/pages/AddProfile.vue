<template lang="pug">
  Layout
    template(v-slot:content='')
      h1(
        class="display-1"
      ) Добавить новый профайл
      v-flex(xs12, lg12)
        .add-profile-wrapper(class='pt-5')
          .add-profile__avatar
            v-layout(align-center='', justify-start='', column='', fill-height='').add-profile__avatar--wrapper
              v-avatar(:size='100', color="grey lighten-2")
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-3 -3 30 30"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 17l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"/></svg>
                //- img(src='https://vuetifyjs.com/apple-touch-icon-180x180.png', alt='avatar')
              v-btn(color='primary', class='mt-3') Добавить фотографию
          .add-profile__main-form
            v-form(ref='form', v-model='valid', lazy-validation='')
              v-text-field(v-model='name', prepend-icon="assignment_ind", :rules='nameRules', label='ФИО', required='')
              v-flex(xs12, lg12)
                v-menu(ref='menu1', v-model='menu1', :close-on-content-click='false', :nudge-right='40', lazy='', transition='scale-transition', offset-y='', full-width='', max-width='290px', min-width='290px')
                  template(v-slot:activator='{ on }')
                    v-text-field(v-model='dateFormatted', label='Дата рождения', hint='MM/ДД/ГГГГ Формат', persistent-hint='', prepend-icon='event', @blur='date = parseDate(dateFormatted)', v-on='on')
                  v-date-picker(v-model='date', no-title='', @input='menu1 = false')
              v-btn(:disabled='!valid', color='success', class='mt-4', @click='validate') Сохранить

</template>

<script>
import Layout from '@/layouts/main'
export default {
  name: 'Add profile',
  metaInfo: {
    title: 'Add profile'
  },
  components: { Layout }
}
</script>

<style lang="stylus" scope>
.add-profile-wrapper
  display flex
  flex-direction column
  @media screen and (min-width: 768px)
    flex-direction row
    justify-content center
    .add-profile__main-form,
    .add-profile__avatar
      width 40%
</style>
