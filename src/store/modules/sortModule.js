import {
  reqSortBooks
} from '../../api'
// 初始化 state
const state = {
  sortNav: []
}

// getters
const getters = {}

// actions
const actions = {
  async reqSortBooks ({
    commit
  }) {
    const result = await reqSortBooks()
    if (result.code === 0) {
      const sortNav = result.data
      commit('addSortBooks',
        sortNav
      )
    }
  }
}

// mutations
const mutations = {
  addSortBooks (state, payload) {
    state.sortNav = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
