export const state = () => ({
  user: null,
  loggedIn: false,
  token: '',
})

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_TOKEN_USER(state, payload) {
    state.token = payload
  },
}

export const actions = {
  // nuxtServerInit (vuexContext , context) {
  // 	const headers = TokenService.getHeader()
  //    	return this.$axios.get(`${domain}/profile`, {
  // 		headers,
  // 	})
  // 	.then((res) => {
  // 		vuexContext.commit('SET_USER', res.data)
  // 	})
  // 	.catch((err) => {
  // 		console.log('err', err)
  // 	})
  // },
  SET_USER(store, payload) {
    store.commit('SET_USER', payload)
  },
}

export const getters = {
  // isAuthenticated(state) {
  // 	return state.auth.loggedIn
  // },
  // loggedInUser(state) {
  // 	return state.auth.user
  // },
}
