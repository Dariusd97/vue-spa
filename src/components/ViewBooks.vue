<template>
  <div id="view-books">
    <ul class="collection">
      <li 
        v-for="book in bookList"
        v-bind:key="book.bookId"
        class="collection-item avatar"
      >
        <div>
          <div class="chip">Title</div>
          <span class="title"> : {{ book.titlu }}</span>
        </div>
        <router-link
          class="secondary-content"
          v-bind:to="{
            name: 'view-one-book',
            params: { book_id: book.bookId }
          }"
        >
          <i class="medium material-icons">navigate_next</i>
        </router-link>
      </li>
    </ul>
    <router-link 
                v-bind:to="{ name: 'category', 
                params: {}}" class="btn grey">
                    Back
                </router-link>
    <button @click="ascSort()" class="waves-effect yellow btn">Asc</button>
    <button @click="descSort()" class="waves-effect blue btn">
      Desc
    </button>
    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{
          name: 'create-book',
          params: { category_name: this.$route.params.category_name }
        }"
        class="btn-floating btn-large yellow"
      >
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
import AppService from "../api.service.js";
export default {
  name: "view-books",
  data() {
    return {
      bookList: [],
    };
  },
  created() {
    AppService.getBooks(this.$route.params.category_name).then(data => {
        this.bookList = data
      });
  },
  beforeRouteEnter(to, from , next){
    next(vm => {
      vm.updateBooksList()
      next()
    })
  },
  methods: {
    updateBooksList() {
      AppService.getBooks(this.$route.params.category_name).then(data => {
        this.bookList = data
      });
    },
    ascSort() {
      this.bookList.sort((a, b) => (a.titlu < b.titlu ? 1 : -1));
    },
    descSort() {
      this.bookList.sort((a, b) => (a.titlu > b.titlu ? 1 : -1));
    }
  }

};
</script>
