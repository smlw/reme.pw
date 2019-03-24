<template lang="pug">
  .profile-info_interest-section
    v-chip(:color='interest.color', :text-color='interest.textColor')
      v-avatar
        v-icon {{ interest.icon }}
      span {{ interest.name }}
    .profile-info_interest-chips.pa-2(v-if="interest.chips.length > 0")
      Chip( :chip='chip' :close='close' :interest='interest'
            v-for="(chip, index) in interest.chips", :key="chip._id"
          )
    v-flex(xs12 v-else)
      div(@click="showField = !showField") Пока тут пусто. Добавить?
      v-text-field(
        v-if="showField"
        :label='interest.name',
        @click:append-outer='sendMessage(interest._id)'
        append-outer-icon="fa-send"
      )
</template>

<script>
import Chip from './Chip'
export default {
  data () {
    return {
      showField: false
    }
  },
  props: ['interest', 'close'],
  components: {Chip}
}
</script>
