<template>
  <router-link to="/Components" class="sub-parts-card">
    <h3 class="parts-card-title">{{ title }}</h3>
    <img class="parts-card-img" :src="img" />
  </router-link>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: ["title", "img"],
})
export default class SubPartsCard extends Vue {}
</script>
<style>
.sub-parts-card {
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
    width: calc(100% - 40px);
    padding: 16px 0;
  }
  .parts-card-img {
  }
}
@media (max-width: 1600px) {
  .sub-parts-card {
    height: 300px;
  }
  .sub-parts-card .parts-card-img {
    height: 360px;
  }
  .sub-parts-card .parts-card-title {
    font-size: 18px;

    width: calc(100% - 32px);
  }
}
@media (max-width: 1199px) {
  .sub-parts-card .parts-card-img {
    height: 300px;
  }
  .sub-parts-card .parts-card-title {
    width: calc(100% - 26px);
  }
}
@media (max-width: 768px) {
  .sub-parts {
    padding-bottom: 24px;
  }
  .sub-parts-card .parts-card-img {
    width: 100vw;
    scroll-snap-align: center;
  }
}
</style>
