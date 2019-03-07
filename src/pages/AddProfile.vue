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
            v-layout(align-center='', justify-start='', column='', fill-height='').add-profile__avatar--wrapper
              v-avatar(:size='150', color="grey lighten-2")
                img(v-if="upload.imgDataUrl" :src='upload.imgDataUrl' @click='toggleShow')
                <svg v-else xmlns="http://www.w3.org/2000/svg" @click='toggleShow' width="50" height="50" viewBox="-3 -3 30 30"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 17l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"/></svg>
              a.mt-1(v-if="!upload.imgDataUrl", @click='toggleShow', prevent) Добавить аватар
              h3.title.mt-3 {{ fio }}
              h4.body-2.mt-1 {{ birthday }}
              my-upload(
                  field='img',
                  @crop-success='cropSuccess',
                  @crop-upload-success='cropUploadSuccess',
                  @crop-upload-fail='cropUploadFail',
                  v-model='upload.uploadShow',
                  :width='300', :height='300',
                  url='/profile/upload',
                  :params='upload.params',
                  :headers='upload.headers',
                  img-format='png',
                  langType='ru',
                )

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
import myUpload from 'vue-image-crop-upload'
export default {
  data () {
    return {
      upload: {
        uploadShow: false,
        params: {
          token: '123456798',
          name: 'avatar'
        },
        headers: {
          smail: '*_~'
        },
        imgDataUrl: ''
      },
      snackbar: {
        show: false,
        message: '',
        color: ''
      },
      fio: '',
      owner: null,
      menuBirthday: false,
      birthday: null,
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
    // Avatar methods
    toggleShow () {
      this.upload.uploadShow = !this.upload.uploadShow
    },
    cropSuccess (imgDataUrl, field) {
      console.log('-------- crop success --------')
      this.upload.imgDataUrl = imgDataUrl
    },
    cropUploadSuccess (jsonData, field) {
      console.log('-------- upload success --------')
      console.log(jsonData)
      console.log('field: ' + field)
    },
    cropUploadFail (status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    },
    // Submit form
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.snackbar = {
          show: true,
          color: 'red',
          message: 'Ошибка!'
        }
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'

        // build profile info for send to sever
        const profile = {
          owner: 1,
          fio: this.fio,
          birthday: this.birthday
        }
        // Initiate action in the store
        this.$store.dispatch('newProfile', profile)
          .then(() => {
            this.submitStatus = 'OK'
            this.snackbar = {
              show: true,
              color: 'success',
              message: 'Успех! Профиль успешно создан.'
            }
          })
          .catch(err => {
            this.submitStatus = err.message
            this.snackbar = {
              show: true,
              color: 'red',
              message: 'Ошибка!'
            }
          })
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
  components: { Layout, 'my-upload': myUpload }
}
</script>

<style lang="stylus" scoped>
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
