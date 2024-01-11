<template>
  <router-link to="/subParts" class="catalog-parts-card">
    <h3 class="parts-card-title" :class="slug">{{ title }}</h3>
    <img class="parts-card-img" :src="img" :class="slug" />
  </router-link>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: ["title", "img", "slug"],
})
export default class CatalogPartsCard extends Vue {}
</script>
<style>
.catalog-parts-card {
  position: relative;

  .parts-card-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    background-color: #ffcc00;
    margin: 0;
    width: calc(100% - 32px);
    padding: 16px 0;

    &.truboukladchiki {
      width: 100%;
    }
  }
  .parts-card-img {
    width: 560px;
    height: 368px;

    &.truboukladchiki {
      width: 540px;
      height: 347px;
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
