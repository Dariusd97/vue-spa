<template>
  <div id="category">
    <ul class="collection">
      <li
        v-for="category in categoryList"
        :key="category.categoryName"
        class="collection-item avatar"
      >
        <img
          :src="'static/images/' + category.categoryName + '.jpg'"
          alt=""
          class="circle"
        />
        <div>
          <div class="chip">
            <span class="title">{{ category.categoryName }}</span>
          </div>
          <br />
          <div class="chip">Numar carti: {{ category.noOfMovies }}</div>
        </div>
        <button @click="removeCateg(category)" class="first-content">
          <i class="material-icons">delete</i>
        </button>
        <router-link
          class="secondary-content"
          v-bind:to="{
            name: 'view-books',
            params: { category_name: category.categoryName }
          }"
        >
          <i class="medium material-icons">navigate_next</i>
        </router-link>
      </li>
    </ul>
    <button @click="ascSort()" class="waves-effect yellow btn">Asc</button>
    <button @click="descSort()" class="waves-effect blue btn">
      Desc
    </button>
    <div class="fixed-action-btn">
      <router-link to="/create-category" class="btn-floating btn-large yellow">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
import AppService from "../api.service.js";
export default {
  name: "category",
  data() {
    return {
      categoryList: [],
    };
  },
  created() {
    AppService.getCategories().then(data => {
      this.categoryList = data;
    });
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getUpdatedCategoryList();
      next();
    });
  },
  methods: {
    getUpdatedCategoryList() {
      AppService.getCategories().then(data => {
        this.categoryList = data;
      });
    },
    removeCateg(categ) {
      AppService.deleteCategory(categ.categoryName)
      this.getUpdatedCategoryList()
    },
    ascSort() {
      this.categoryList.sort((a, b) => (a.noOfMovies < b.noOfMovies ? 1 : -1));
    },
    descSort() {
      this.categoryList.sort((a, b) => (a.noOfMovies > b.noOfMovies ? 1 : -1));
    }
  }
};
</script>
