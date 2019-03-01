<script>
import Layout from '@/layouts/main'
export default {
  name: 'Test',
  metaInfo: {
    title: 'test title'
  },
  components: { Layout }
}
</script>
<template lang="pug">
  Layout
    template(v-slot:content='')
      .d testlay22
</template>
