import {
  reqShopBooks
} from '../../api'
// 初始化 state
const state = {
  // all books
  books: []
}

// getters
const getters = {}

// actions
const actions = {
  async reqShopBooks ({
    commit
  }) {
    const result = await reqShopBooks()
    if (result.code === 0) {
      const books = result.data
      commit('addBooks',
        books
      )
    }
  }
}

// mutations
const mutations = {
  addBooks (state, payload) {
    state.books = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
