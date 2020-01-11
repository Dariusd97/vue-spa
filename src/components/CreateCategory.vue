<template>
    <div id="create-category">
        <h3>Create category</h3>
        <div class="row">
            <form @submit.prevent="createCategory" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="category" required>
                        <label>Category Name</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn grey">
                    Back
                </router-link>
            </form>
        </div>
    </div>
</template>
<script>
import AppService from '../api.service.js'
export default {
    name: 'create-category',
    data(){
        return {
            category: null,
        }
    },
    methods: {
        createCategory(){
            AppService.createCategory(this.category);
            this.$router.push("/")
        }
    }
}
</script>