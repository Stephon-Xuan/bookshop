// 初始化state
const state = {
  // selected book
  // book: {},
  orders: []
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  addOrder (state, payload) {
    const {
      book
    } = payload
    state.orders.push(book)
  },
  removeOrder (state, payload) {
    const {
      bookId
    } = payload
    state.orders = state.orders.filter(book => book._id !== bookId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
