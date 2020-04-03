import {
  reqCarousel
} from '../../api'
// 初始化 state
const state = {
  // all books
  carousel: []
}

// getters
const getters = {}

// actions
const actions = {
  async reqCarousel ({
    commit
  }) {
    const result = await reqCarousel()
    if (result.code === 0) {
      const carousel = result.data
      commit('addCarousel',
        carousel
      )
    }
  }
}

// mutations
const mutations = {
  addCarousel (state, payload) {
    state.carousel = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
