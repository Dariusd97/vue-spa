import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'
import CreateBook from '@/components/CreateBook'
import ViewOneBook from '@/components/ViewOneBook'
import ViewBooks from '@/components/ViewBooks'
import EditBook from '@/components/EditBook'
import CreateCategory from '@/components/CreateCategory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'category',
      component: Category
    },
    {
      path: '/create-category',
      name: 'create-category',
      component: CreateCategory
    }, 
    {
      path: '/:category_name',
      name: 'view-books',
      component: ViewBooks
    },
    {
      path: '/:category_name/:book_id',
      name: 'view-one-book',
      component: ViewOneBook
    },
    {
      path: '/create-book/:category_name',
      name: 'create-book',
      component: CreateBook
    },
    {
      path: '/edit/:category_name/:book_id',
      name: 'edit-book',
      component: EditBook
    },      
  ]
})
