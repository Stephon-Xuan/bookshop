import Vue from 'vue'
import Vuex from 'vuex'
import sortModule from './modules/sortModule'
import cartModule from './modules/cartModule'
import orderModule from './modules/orderModule'
import booksModule from './modules/booksModule'
import carouselModule from './modules/carouselModule'
import usedBooksModule from './modules/usedBooksModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sortModule,
    cartModule,
    orderModule,
    booksModule,
    usedBooksModule,
    carouselModule
  }
})
