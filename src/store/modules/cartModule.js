// 初始化state
const state = {
  // selected book
  // book: {},
  cart: []
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  addCart (state, payload) {
    const {
      book
    } = payload
    state.cart.push(book)
  },
  removeCart (state, payload) {
    const {
      bookId
    } = payload
    state.cart = state.cart.filter(book => book._id !== bookId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
