<template>
  <div class="sub-parts">
    <div class="back">
      <div>
        <span v-for="(item, idx) of breadcrumbs" :key="item.id">
          <router-link :to="item.link">{{ item.title }}</router-link>
          <span style="padding: 0 8px" v-if="idx + 1 !== breadcrumbs.length"
            >/</span
          >
        </span>
      </div>
    </div>

    <h2 class="parts-title">{{ categoryTitle }}</h2>

    <div class="catalog-main">
      <SubPartsCard
        v-for="item of subcategories"
        :key="item.id"
        :url="'/parts/' + $route.params.id + '/' + item.id"
        :img="item.image"
        :title="item.title"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SubPartsCard from "@/components/SubPartsCard.vue"; // @ is an alias to /src
import Engines from "../assets/image/Engines.png";
import Components from "../assets/image/Components.png";

@Options({
  components: {
    SubPartsCard,
  },
  data() {
    return {
      subcategories: [],
      Engines,
      Components,
      categoryTitle: "",
      breadcrumbs: [],
    };
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },
  mounted() {
    const currentCategory = this.$route.params.id;
    fetch("http://45.12.238.17:8000/api/parts-subcategories/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.subcategories = data.reverse();
      });
    fetch("http://45.12.238.17:8000/api/parts-categories/" + currentCategory)
      .then((res) => res.json())
      .then((data) => {
        this.categoryTitle = data.title;
      });
    fetch("http://45.12.238.17:8000/api/parts-categories/" + currentCategory)
      .then((res) => res.json())
      .then((data) => {
        this.breadcrumbs = [
          { id: 0, title: "Каталог", link: `/parts/` },
          { id: data.id, title: data.title, link: `/parts/${currentCategory}` },
        ];
      });
  },
})
export default class SubParts extends Vue {}
</script>
<style lang="scss">
.sub-parts {
}
</style>
