<template>
  <div id="edit-book">
    <h3>Edit book</h3>
    <div class="row">
      <form @submit.prevent="update" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="titlu" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="autor" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="editura" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="number" v-model="an_aparitie" required />
          </div>
        </div>
        <button type="submit" class="btn yellow">Submit</button>
        <router-link
          v-bind:to="{
            name: 'view-books',
            params: { category_name: this.$route.params.category_name }
          }"
          class="btn grey"
        >Back</router-link>
      </form>
    </div>
  </div>
</template>
<script>
import AppService from "../api.service.js";
export default {
  name: "edit-book",
  data() {
    return {
      titlu: null,
      autor: null,
      editura: null,
      an_aparitie: null
    };
  },
  watch: {
    $route: "getBook"
  },
  methods: {
    getBook() {
      AppService.getBook(
        this.$route.params.category_name,
        this.$route.params.book_id
      ).then(data => {
        (this.titlu = data.titlu),
          (this.autor = data.autor),
          (this.editura = data.editura),
          (this.an_aparitie = data.an_aparitie);
      });
    },
    update(){
      AppService.updateBook(
        this.$route.params.category_name,
        this.$route.params.book_id, this.titlu, this.autor, this.editura, this.an_aparitie)
        this.$router.push(`/${this.$route.params.category_name}`)
    }
  },
  created() {
    AppService.getBook(
      this.$route.params.category_name,
      this.$route.params.book_id
    ).then(data => {
      (this.titlu = data.titlu),
        (this.autor = data.autor),
        (this.editura = data.editura),
        (this.an_aparitie = data.an_aparitie);
    });
  }
};
</script>
