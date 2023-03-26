<template>
  <div>
    <HeaderPage />
    <Nuxt />
    <FooterPage />
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite'
import HeaderPage from './Header'
import FooterPage from './Footer'
import main from '~/mixins/main'

export default {
  name: 'LayoutMain',
  components: {
    HeaderPage,
    FooterPage,
  },
  mixins: [main],
  data() {
    return {}
  },
  computed: {
    dataUserInfo() {
      return this.$store.state.user
    },
  },
  created() {},
  mounted() {
    initFlowbite()
  },
  methods: {},
}
</script>
<style scoped lang="scss"></style>
