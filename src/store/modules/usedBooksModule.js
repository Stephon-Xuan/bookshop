import {
  reqUsedBooks
} from '../../api'
// 初始化 state
const state = {
  // all books
  usedBooks: []
}

// getters
const getters = {}

// actions
const actions = {
  async  reqUsedBooks ({
    commit
  }) {
    const result = await reqUsedBooks()
    if (result.code === 0) {
      const usedBooks = result.data
      commit('addUsedBooks',
        usedBooks
      )
    }
  }
}

// mutations
const mutations = {
  addUsedBooks (state, payload) {
    state.usedBooks = payload
  },
  // 单本
  addUsedBook (state, payload) {
    const usedBook = payload
    state.usedBooks.push(usedBook)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
