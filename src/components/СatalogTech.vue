<template>
  <div class="catalog-main">
    <CatalogTechCard
      v-for="category of categories"
      :key="category.id"
      :title="category.title"
      :img="category.image"
      :slug="
        category.title === 'Трактора'
          ? 'traktora'
          : category.title === 'Бульдозеры'
          ? 'buldozery'
          : category.title === 'Сваебои/Копры'
          ? 'svaeboi'
          : category.title === 'Трубоукладчики'
          ? 'truboukladchiki'
          : category.title === 'Бурильные машины'
          ? 'burilnaya-mashina'
          : null
      "
      :url="'/tech/' + category.id"
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CatalogTechCard from "@/components/CatalogTechCard.vue"; // @ is an alias to /src
import Tractor from "../assets/image/Tractor.png";
import Drill from "../assets/image/Drill.png";
import Three from "../assets/image/Three.png";
import Piles from "../assets/image/Piles.png";
import Bulldozer from "../assets/image/Bulldozer.png";

@Options({
  components: {
    CatalogTechCard,
  },
  data() {
    return {
      Tractor,
      Drill,
      Three,
      Piles,
      Bulldozer,
      categories: [],
    };
  },
  mounted() {
    fetch("http://45.12.238.17:8000/api/cars-categories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.categories = data;
      });
  },
})
export default class CatalogTech extends Vue {}
</script>
<style>
.catalog-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 64px;
}
@media (max-width: 1365px) {
  .catalog-main {
    margin-top: 32px;
  }
}
@media (max-width: 768px) {
  .catalog-main {
    flex-wrap: nowrap;

    scroll-behavior: smooth;
    justify-content: space-between;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
}
</style>
