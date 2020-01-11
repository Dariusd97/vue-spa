<template>
    <div id="view-one-book">
        <ul class="collection with-header">
            <li class="collection-header"><h4>{{titlu}}</h4></li>
            <li class="collection-name">Autor: {{autor}}</li>
            <li class="collection-name">Editura : {{editura}}</li>
            <li class="collection-name">An aparitie: {{an_aparitie}}</li>
        </ul>
        <router-link 
                v-bind:to="{ name: 'view-books', 
                params: {category_name: this.$route.params.category_name}}" class="btn grey">
                    Back
                </router-link>
        <button @click="deleteBook()" class="btn yellow">Remove</button>
        <div class="fixed-action-btn">
            <router-link v-bind:to="{ name: 'edit-book', 
                params: {category_name: this.$route.params.category_name, 
                        book_id: this.$route.params.book_id}}" 
                class="btn-floating btn-large yellow">
                <i class="fa fa-edit"></i>
            </router-link>
        </div>
    </div>
</template>
<script>
import AppService from '../api.service.js'
export default {
    name: 'view-one-book',
    data() {
        return {
            titlu: null,
            autor: null,
            editura: null,
            an_aparitie: null
        }
    },
    methods: {
        getBook(){
            AppService.getBook(this.$route.params.category_name, this.$route.params.book_id).then(data => {
                this.titlu = data.titlu,
                this.autor = data.autor,
                this.editura = data.editura,
                this.an_aparitie = data.an_aparitie
            })
        },
        deleteBook(){
            if(confirm("Are you sure ?")){
                AppService.deleteBook(this.$route.params.category_name, this.$route.params.book_id);
                this.$router.push(`/${this.$route.params.category_name}`)
            }
        }
    },
    created(){
            AppService.getBook(this.$route.params.category_name, this.$route.params.book_id).then(data => {
                this.titlu = data.titlu,
                this.autor = data.autor,
                this.editura = data.editura,
                this.an_aparitie = data.an_aparitie
            })
    }
}
</script>