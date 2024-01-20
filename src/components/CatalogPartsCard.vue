<template>
  <router-link :to="url" class="catalog-parts-card">
    <h3 class="parts-card-title" :class="slug">{{ title }}</h3>
    <img class="parts-card-img" :src="img" :class="slug" />
  </router-link>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: ["title", "img", "slug", "url"],
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
@media (max-width: 1899px) {
  .catalog-parts-card .parts-card-img {
    width: 520px;
    &.truboukladchiki {
      width: 500px;
    }
  }
}
@media (max-width: 1600px) {
  .catalog-parts-card .parts-card-img {
    width: 380px;
    height: 268px;
    &.truboukladchiki {
      width: 360px;
      height: 252px;
    }
  }
  .catalog-parts-card .parts-card-title {
    font-size: 16px;

    width: calc(100% - 22px);
    padding: 16px 0;
  }
}
@media (max-width: 1199px) {
  .catalog-parts-card .parts-card-img {
    width: 340px;
    height: 228px;
    &.truboukladchiki {
      width: 320px;
      height: 214px;
    }
  }
  .catalog-parts-card .parts-card-title {
    width: calc(100% - 20px);
  }
}
@media (max-width: 768px) {
  .parts {
    padding-bottom: 24px;
  }
  .catalog-parts-card .parts-card-img {
    height: auto;

    width: 100vw;
    scroll-snap-align: center;
  }
  .catalog-parts-card .parts-card-img {
    &.truboukladchiki {
      width: 100vw;
      height: auto;
    }
  }
}
</style>
