<template lang="pug">
  v-chip(
    :close='close'
    :color='interest.color'
    label, outline
    v-model='isActual'
    @input="removeChip(interest._id, chip._id)"
  ) {{ chip.chipName }}
</template>

<script>
export default {
  data () {
    return {
      profileID: this.$route.params.id,
      isActual: true
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
