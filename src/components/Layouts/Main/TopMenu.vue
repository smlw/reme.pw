<template lang="pug">
  v-toolbar(app)
    router-link.features-link(
        to="add"
      )
        v-layout(align-center justify-start row fill-height)
          v-icon add_circle
          span Добавить профайл
    router-link.features-link(
      to="/dashboard"
    )
      v-layout(align-center justify-start row fill-height)
        v-icon list_alt
        span Мои профайлы
    router-link.features-link(
      to="/calendar"
    )
      v-layout(align-center justify-start row fill-height)
        v-icon calendar_today
        span Календарь
</template>

<style lang="stylus" scoped>
.features-link
  text-decoration none
  margin 0 15px 0 0
  padding 5px
  &:last-child
    margin 0
  &:hover
    background #ECEFF1
    border-radius 5px
  i
    margin 0 5px 0 0
</style>
