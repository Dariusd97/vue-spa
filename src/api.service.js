import axios from 'axios'

const LOCAL_API_BASE_URL = "http://localhost:8081"
axios.defaults.baseURL = LOCAL_API_BASE_URL

const appService = {
    getCategories(){
        return new Promise((resolve => {
            axios.get('/category/getAll')
            .then(response => {
                resolve(response.data)
            })
        }))
    },
    getCategory(){
        return new Promise((resolve => {
            axios.get(`/category/get-category?categoryName=${categoryName}`)
            .then(response => {
                resolve(response.data)
            })
        }))
    },

    getBooks(categoryName){
        return new Promise((resolve => {
            axios.get(`/category/get-all-books?categoryName=${categoryName}`)
            .then(response => {
                resolve(response.data)
            })
        }))
    },

    getBook(categoryName,bookId){
        return new Promise((resolve => {
            axios.get(`/book/get-book?categoryName=${categoryName}&bookId=${bookId}`)
            .then(response => {
                resolve(response.data)
            })
        }))
    },
    deleteBook(categoryName, bookId){
        return new Promise((resolve => {
            axios.delete(`/book/delete?categoryName=${categoryName}&bookId=${bookId}`)
            .then(response => {
                resolve(response.data)
            })
        }))
    },
    createBook(categoryName, titlu, autor, editura, an_aparitie){
        return new Promise((resolve => {
            axios.post(`/book/create?categoryName=${categoryName}`,{
                titlu: titlu,
                autor: autor,
                editura: editura,
                an_aparitie: an_aparitie
            })
            .then(response => {
                resolve(response.data)
            })
        }))
    },
    updateBook(categoryName, bookId, titlu, autor, editura, an_aparitie){
        return new Promise((resolve => {
            axios.put(`/book/update?categoryName=${categoryName}&book_id=${bookId}`,{
                titlu: titlu,
                autor: autor,
                editura: editura,
                an_aparitie: an_aparitie
            })
            .then(response => {
                resolve(response.data)
            })
        }))``
    },
    createCategory(categoryName){
        return new Promise((resolve => {
            axios.post(`/category/create`,{
                categoryName: categoryName,
            })
            .then(response => {
                resolve(response.data)
            })
        }))
    },
    deleteCategory(categoryName){
        return new Promise((resolve => {
            axios.delete(`/category/delete?categoryName=${categoryName}`)
            .then(response => {
                resolve(response.data)
            })
        }))
    },
    updateCategory(categoryName){
        return new Promise((resolve => {
            axios.put(`/category/update?categoryName=${categoryName}`,{
                categoryName : categoryName
            })
            .then(response => {
                resolve(response.data)
            })
        }))
    },
}

export default appService