<template>
  <div class="components">
    <div class="back">
      <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
      <a href="" class="">Назад</a>
    </div>

    <h2 class="parts-title">Запасные части к тракторам</h2>

    <div class="components-catalog">
      <ComponentCard
        v-for="part of parts"
        :key="part.id"
        :url="
          '/parts/' +
          $route.params.idCat +
          '/' +
          $route.params.idSub +
          '/' +
          part.id
        "
        :img="part.image"
        :title="part.title"
        :text="part.description"
        :inStock="part.in_stock"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ComponentCard from "@/components/ComponentCard.vue"; // @ is an alias to /src

@Options({
  components: {
    ComponentCard,
  },
  data() {
    return {
      parts: [],
    };
  },
  mounted() {
    fetch(
      `http://45.12.238.17:8000/api/parts?category=${this.$route.params.idCat}&subcategory=${this.$route.params.idSub}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.parts = data;
      });
  },
})
export default class Components extends Vue {}
</script>
<style lang="scss">
.components {
  .components-catalog {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 32px;
    padding: 64px 80px;
  }
}
@media (max-width: 1199px) {
  .components .components-catalog {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 1000px) {
  .components .components-catalog {
    grid-template-columns: 1fr 1fr;
    padding: 32px;
  }
}
@media (max-width: 768px) {
  .components .components-catalog {
    display: block;
  }
}
</style>
