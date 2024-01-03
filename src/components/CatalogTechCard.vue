<template>
  <router-link to="/techCards" class="menu-link"
    ><div class="catalog-card">
      <img src="../assets/image/Drill.png" />
      <h3 class="card-title">{{ title }}</h3>
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
  props: ["title", "img"],
})
export default class CatalogTechCard extends Vue {}
</script>
<style>
.catalog-card {
  position: relative;

  .card-title {
    position: absolute;
    top: 4%;
    left: 10%;
    text-transform: uppercase;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
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
</style>
