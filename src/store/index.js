import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import {
  cartMutations
} from './mutations'
// const API_BASE = 'http://localhost:3000/api/v1'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // all manufacturers
    // manufacturers: [],
    // selected book
    book: {},
    // all books
    books: [
      {
        _id: '0',
        name: 'JavaScript程序设计',
        description: '本书旨在通过从零开始介绍JavaScript 编程让读者理解计算机科学的基本思想和原理。书中内容丰富全面，阐述由浅入深。主要内容有：计算的相关知识、编程的基本概念、数据、语句、函数、事件、软件架构、分布式计算、图形与动画，此外还探讨了正则表达式、递归、缓存等高级主题。',
        image: 'https://file.ituring.com.cn/SmallCover/0100f3bec2a524cd5d05',
        price: 2000,
        shop: '随风而去'
      },
      {
        _id: '0',
        name: 'JavaScript程序设计',
        description: '本书旨在通过从零开始介绍JavaScript 编程让读者理解计算机科学的基本思想和原理。书中内容丰富全面，阐述由浅入深。主要内容有：计算的相关知识、编程的基本概念、数据、语句、函数、事件、软件架构、分布式计算、图形与动画，此外还探讨了正则表达式、递归、缓存等高级主题。',
        image: 'https://file.ituring.com.cn/SmallCover/0100f3bec2a524cd5d05',
        price: 2000,
        shop: '随风而去'
      },
      {
        _id: '0',
        name: 'JavaScript程序设计',
        description: '本书旨在通过从零开始介绍JavaScript 编程让读者理解计算机科学的基本思想和原理。书中内容丰富全面，阐述由浅入深。主要内容有：计算的相关知识、编程的基本概念、数据、语句、函数、事件、软件架构、分布式计算、图形与动画，此外还探讨了正则表达式、递归、缓存等高级主题。',
        image: 'https://file.ituring.com.cn/SmallCover/0100f3bec2a524cd5d05',
        price: 2000,
        shop: '随风而去'
      },
      {
        _id: '0',
        name: 'JavaScript程序设计',
        description: '本书旨在通过从零开始介绍JavaScript 编程让读者理解计算机科学的基本思想和原理。书中内容丰富全面，阐述由浅入深。主要内容有：计算的相关知识、编程的基本概念、数据、语句、函数、事件、软件架构、分布式计算、图形与动画，此外还探讨了正则表达式、递归、缓存等高级主题。',
        image: 'https://file.ituring.com.cn/SmallCover/0100f3bec2a524cd5d05',
        price: 2000,
        shop: '随风而去'
      },
      {
        _id: '0',
        name: 'JavaScript程序设计',
        description: '本书旨在通过从零开始介绍JavaScript 编程让读者理解计算机科学的基本思想和原理。书中内容丰富全面，阐述由浅入深。主要内容有：计算的相关知识、编程的基本概念、数据、语句、函数、事件、软件架构、分布式计算、图形与动画，此外还探讨了正则表达式、递归、缓存等高级主题。',
        image: 'https://file.ituring.com.cn/SmallCover/0100f3bec2a524cd5d05',
        price: 2000,
        shop: '随风而去'
      },
      {
        _id: '0',
        name: 'JavaScript程序设计',
        description: '本书旨在通过从零开始介绍JavaScript 编程让读者理解计算机科学的基本思想和原理。书中内容丰富全面，阐述由浅入深。主要内容有：计算的相关知识、编程的基本概念、数据、语句、函数、事件、软件架构、分布式计算、图形与动画，此外还探讨了正则表达式、递归、缓存等高级主题。',
        image: 'https://file.ituring.com.cn/SmallCover/0100f3bec2a524cd5d05',
        price: 2000,
        shop: '随风而去'
      },
      {
        _id: '0',
        name: 'JavaScript程序设计',
        description: '本书旨在通过从零开始介绍JavaScript 编程让读者理解计算机科学的基本思想和原理。书中内容丰富全面，阐述由浅入深。主要内容有：计算的相关知识、编程的基本概念、数据、语句、函数、事件、软件架构、分布式计算、图形与动画，此外还探讨了正则表达式、递归、缓存等高级主题。',
        image: 'https://file.ituring.com.cn/SmallCover/0100f3bec2a524cd5d05',
        price: 2000,
        shop: '随风而去'
      },
      {
        _id: '0',
        name: 'JavaScript程序设计',
        description: '本书旨在通过从零开始介绍JavaScript 编程让读者理解计算机科学的基本思想和原理。书中内容丰富全面，阐述由浅入深。主要内容有：计算的相关知识、编程的基本概念、数据、语句、函数、事件、软件架构、分布式计算、图形与动画，此外还探讨了正则表达式、递归、缓存等高级主题。',
        image: 'https://file.ituring.com.cn/SmallCover/0100f3bec2a524cd5d05',
        price: 2000,
        shop: '随风而去'
      }
    ]
  },
  // mutations:{
  //   ADD_TO_CART(state, payload) {
  //     const {book} = payload
  //     state.cart.push(book)
  //   },
  //   REMOVE_FROM_CART(state, payload) {
  //     const {bookId} = payload
  //     state.cart = state.cart.filter(book => book._id !== bookId)
  //   }
  // }
  mutations: {
    ...cartMutations
  }
})
