<template>
    <div id="create-book">
        <h3>Create book</h3>
        <div class="row">
            <form @submit.prevent="createBook" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="titlu" required>
                        <label>Title</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="autor" required>
                        <label>Autor</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="editura" required>
                        <label>Editura</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="number" v-model="an_aparitie" required>
                        <label>An aparitie</label>
                    </div>
                </div>
                <button type="submit" class="btn yellow">Submit</button>
                <router-link 
                v-bind:to="{ name: 'view-books', 
                params: {category_name: this.$route.params.category_name}}" class="btn grey">
                    Back
                </router-link>
            </form>
        </div>
    </div>
</template>
<script>
import AppService from '../api.service.js'
export default {
    name: 'create-book',
    data() {
        return {
            titlu: null,
            autor: null,
            editura: null,
            an_aparitie: null
        }
    },
    methods: {
        createBook(){
            AppService.createBook(this.$route.params.category_name, this.titlu, this.autor, this.editura, this.an_aparitie);
            this.$router.push(`/${this.$route.params.category_name}`)
        }
    }
}
</script>