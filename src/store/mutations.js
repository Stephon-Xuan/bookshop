import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './mutation-types'

export const cartMutations = {
  [ADD_TO_CART] (state, payload) {
    const {
      book
    } = payload
    state.cart.push(book)
  },
  [REMOVE_FROM_CART] (state, payload) {
    const {
      bookId
    } = payload
    state.cart = state.cart.filter(book => book._id !== bookId)
  }
}
