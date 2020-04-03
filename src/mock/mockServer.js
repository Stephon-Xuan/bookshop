import Mock from 'mockjs'
import sort from './json/sort'
import books from './json/books'
import usedBooks from './json/usedBooks'
import carousel from './json/carousel'

Mock.mock('/books', {
  code: 0,
  data: books.books
})

Mock.mock('/sort', {
  code: 0,
  data: sort.sortNav
})

Mock.mock('/usedBooks', {
  code: 0,
  data: usedBooks.usedBooks
})
// 广告轮播图
Mock.mock('/carousel', {
  code: 0,
  data: carousel.carousel
})
