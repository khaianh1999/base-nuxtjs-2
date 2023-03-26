export default {
  data() {
    return {}
  },
  methods: {
    setCookie(name, value, days) {
      this.$cookies.set(name, value, {
        expires: new Date(Date.now() + days * 24 * 3600000),
        path: '/',
      })
    },
    getCookie(name) {
      return this.$cookies.get(name) ?? null
    },
  },
}
