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
              v-btn(color='primary', class='mt-3') Добавить фотографию
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
      v-snackbar(v-model='snackbar.show', :color='snackbar.color', :timeout="6000") {{ snackbar.message }}
        v-btn(color='white', flat='', @click='snackbar = false')
          v-icon() close
</template>

<script>
import Layout from '@/layouts/main'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      fio: '',
      menuBirthday: false,
      birthday: null,
      submitStatus: null,
      snackbar: {
        show: false,
        message: '',
        color: ''
      }
    }
  },
  watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
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
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        console.log('Error!')
        this.snackbar = {
          show: true,
          color: 'red',
          message: 'Ошибка!'
        }
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        console.log('PENDING!')
        setTimeout(() => {
          this.submitStatus = 'OK'
          console.log('OK!')
          this.snackbar = {
            show: true,
            color: 'success',
            message: 'Успех! Профиль успешно создан.'
          }
        }, 500)
      }
    }
  },
  computed: {
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

.alert-wrapper
  position absolute
  top 0
  width 100%
</style>
