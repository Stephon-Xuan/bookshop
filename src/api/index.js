import ajax from './ajax'
// const BASE_URL = '/api'

// 分类书籍
export const reqSortBooks = () => ajax('/sort')

export const reqShopBooks = () => ajax('/books')

export const reqUsedBooks = () => ajax('/usedBooks')

export const reqCarousel = () => ajax('/carousel')
