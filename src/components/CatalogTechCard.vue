<template>
  <router-link
    :to="url"
    class="menu-link"
    @click="$store.dispatch('setTechCategoryID', id)"
    ><div class="catalog-card">
      <img class="catalog-cart-img" :src="img" alt="" />
      <h3 class="card-title" :class="slug">{{ title }}</h3>
      <div class="hover-link">
        <a class="link" href="">Каталог</a>
        <img class="arrow" src="../assets/icon/Arrow.svg" alt="" />
        <div class="circle"></div>
      </div></div
  ></router-link>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: ["title", "img", "slug", "url", "id"],
})
export default class CatalogTechCard extends Vue {}
</script>
<style>
.catalog-card {
  position: relative;
  .catalog-cart-img {
    height: 368px;
  }
  .card-title {
    position: absolute;
    top: 4%;

    text-transform: uppercase;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    &.svaeboi,
    &.buldozery,
    &.traktora {
      right: 10%;
    }

    &.burilnaya-mashina,
    &.truboukladchiki {
      left: 10%;
    }
  }
  .hover-link {
    display: none;
  }
  &:hover {
    filter: invert(80%);
    .hover-link {
      display: flex;
      align-items: center;
      position: absolute;
      top: 20%;
      left: 10%;
      filter: invert(0%);

      .link {
        text-decoration: none;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        color: #000;
      }
      .circle {
        width: 60px;
        height: 60px;
        background-color: #ffcc00;
        border-radius: 50%;
      }
      .arrow {
        margin: 0 6px;
      }
    }
  }
}
@media (max-width: 1899px) {
  .catalog-card .catalog-cart-img {
    height: 340px;
  }
}
@media (max-width: 1600px) {
  .catalog-card .catalog-cart-img {
    height: 280px;
  }
  .catalog-card .card-title {
    &.burilnaya-mashina,
    &.truboukladchiki {
      left: 8%;
      font-size: 18px;
    }
  }
  .catalog-card .card-title {
    &.svaeboi,
    &.buldozery,
    &.traktora {
      right: 8%;
      font-size: 18px;
    }
  }
}
@media (max-width: 1365px) {
  .catalog-card .catalog-cart-img {
    height: 240px;
  }
}
@media (max-width: 1199px) {
  .catalog-card .card-title {
    &.burilnaya-mashina,
    &.truboukladchiki {
      font-size: 14px;
    }
  }
  .catalog-card .card-title {
    &.svaeboi,
    &.buldozery,
    &.traktora {
      font-size: 14px;
    }
  }
}
@media (max-width: 1199px) {
  .menu-link {
    margin: auto 12px;
  }
  .catalog-card {
  }
  .catalog-card .catalog-cart-img {
    height: 220px;
  }
}
@media (max-width: 768px) {
  .catalog-card .catalog-cart-img {
    height: auto;
    width: calc(100vw - 30px);
    scroll-snap-align: center;
  }
}
</style>
