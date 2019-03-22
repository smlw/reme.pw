<template lang="pug">
  Layout
    template(v-slot:content='')
      h1(
        class="display-1"
      ) Добавить новый профайл
      v-flex(xs12, lg12)
        .add-profile-wrapper(class='pt-5')
          // AVATAR
          .add-profile__avatar
            v-layout(align-center, justify-start, column, fill-height).add-profile__avatar--wrapper
              v-carousel( hide-delimiters
                          v-model="activeAvatar"
                          next-icon='chevron_right'
                          prev-icon='chevron_left'
                          :cycle="false"
                          light=true height="200"
                          max="200"
                          style="width: 300px")
                v-layout(align-center='', justify-center='', row='', fill-height='')
                  v-carousel-item(v-for='(item,i) in avatarName', :key='i', width="200"  :src='`https://joeschmoe.io/api/v1/${item.name}`')
              h3.title.mt-3 {{ fio }}
              h4.body-2.mt-1 {{ birthday }}
          // FORM
          .add-profile__main-form
            v-form(ref='form', lazy-validation='', @submit.prevent='')
              v-text-field(
                v-model='fio',
                :error-messages="fioErrors"
                @change="$v.fio.$touch()"
                @input="$v.fio.$touch()"
                @blur="$v.fio.$touch()"
                prepend-icon="assignment_ind",
                label='ФИО'
              )
              v-flex(xs12, lg12)
                v-menu(v-model='menuBirthday', :close-on-content-click='false', :nudge-right='40', lazy='', transition='scale-transition', offset-y='', full-width='', min-width='290px')
                  template(v-slot:activator='{ on }')
                    v-text-field(
                        v-model='birthday',
                        label='Дата рождения',
                        prepend-icon='event',
                        readonly='',
                        v-on='on'
                        :error-messages="birthdayErrors"
                        @change="$v.fio.$touch()"
                        @input="$v.fio.$touch()"
                        @blur="$v.fio.$touch()"
                      )
                  v-date-picker(v-model='birthday', @input='menuBirthday = false')
              v-btn(
                color='success', class='mt-4', @click='onSubmit'
                type="submit" :disabled="submitStatus === 'PENDING'"
                ) Сохранить
      // ALERTS
      v-snackbar(v-model='snackbar.show', :color='snackbar.color', :timeout="6000") {{ snackbar.message }}
        v-btn(color='white', flat='', @click='snackbar.show = false')
          v-icon() close
</template>

<script>
import Layout from '@/layouts/main'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      activeAvatar: 0,
      avatarName: [
        {name: 'jess'},
        {name: 'jon'},
        {name: 'jodi'}
      ],
      snackbar: {
        show: false,
        message: '',
        color: ''
      },
      fio: '',
      owner: null,
      menuBirthday: false,
      birthday: null,
      avatar: '',
      submitStatus: null
    }
  },
  validations: {
    fio: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(64)
    },
    birthday: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(12)
    }
  },
  methods: {
    // Submit form
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.snackbar = {
          show: true,
          color: 'red',
          message: 'Ошибка. Проверьте правильность формы.'
        }
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'

        // build profile info for send to sever
        const profile = {
          owner: this.$store.getters.getAuthUser.id,
          fullName: this.fio,
          birthday: this.birthday,
          avatar: this.avatarName[this.activeAvatar].name
          // sections: [
          //   {
          //     name: 'Музыка',
          //     icon: 'fa-music',
          //     color: 'indigo',
          //     textColor: 'white',
          //     chips: [
          //       { chipName: 'Инди', color: 'indigo', close: false, isActual: true },
          //       { chipName: 'Шансон', color: 'indigo', close: false, isActual: true }
          //     ]
          //   }
          // ]
        }
        // Initiate action in the store
        this.$store.dispatch('newProfile', profile)
          .then(() => {
            this.submitStatus = 'OK'
            this.snackbar = {
              show: true,
              message: this.$store.getters.message,
              color: 'success'
            }
          })
          .catch(() => {
            this.submitStatus = 'ERROR'
            this.snackbar = {
              show: true,
              message: this.$store.getters.error,
              color: 'red'
            }
          })
      }
    }
  },
  computed: {
    ...mapGetters(['getOneProfile']),
    fioErrors () {
      const errors = []
      if (!this.$v.fio.$dirty) return errors
      !this.$v.fio.minLength && errors.push('ФИО должно иметь минимум 4 символа.')
      !this.$v.fio.maxLength && errors.push('ФИО не может быть таким длинным.')
      !this.$v.fio.required && errors.push('Данное обязательно для заполнения.')
      return errors
    },
    birthdayErrors () {
      const errors = []
      if (!this.$v.birthday.$dirty) return errors
      !this.$v.birthday.required && errors.push('Данное обязательно для заполнения.')
      !this.$v.birthday.required && errors.push('Дата рождения не может быть такой длинной.')
      return errors
    }
  },
  components: { Layout }
}
</script>

<style lang="stylus" scoped>
.v-carousel
  box-shadow none
.v-avatar
  margin 0
.add-profile-wrapper
  display flex
  flex-direction column
  @media screen and (min-width: 768px)
    flex-direction row
    justify-content center
    .add-profile__main-form,
    .add-profile__avatar
      width 40%

.alert-wrapper
  position absolute
  top 0
  width 100%
</style>
