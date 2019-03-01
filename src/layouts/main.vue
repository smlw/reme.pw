<script>
import LeftBar from '@/components/Layouts/Main/LeftBar'
import TopMenu from '@/components/Layouts/Main/TopMenu'
import Footer from '@/components/Layouts/Main/Footer'
export default {
  components: { LeftBar, TopMenu, Footer }
}
</script>

<template lang="pug">
  v-app
    // leftside bar
    LeftBar
    // Topside bar
    TopMenu
    // Content wrapper
    v-content
      v-container(fluid)
        slot(name='content')
    v-footer(app)
      Footer
</template>
