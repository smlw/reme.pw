<template lang="pug">
  div
    v-chip(
      :close='close'
      :color='chip.color'
      label, outline
      v-model='chip.isActual'
      @input="removeChip(interest._id, chip._id)"
    ) {{ chip.chipName }}
</template>

<script>
export default {
  data () {
    return {
      profileID: this.$route.params.id
    }
  },
  props: ['chip', 'close', 'interest'],
  methods: {
    // id интереса, id чипсы, id профайла.
    removeChip (interestID, chipID) {
      const profileID = this.profileID
      this.$store.dispatch('removeChip', {interestID, chipID, profileID})
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
