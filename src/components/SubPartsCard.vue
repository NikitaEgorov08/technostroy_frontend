<template>
  <router-link to="/Components" class="sub-parts-card">
    <h3 class="parts-card-title">{{ title }}</h3>
    <img class="parts-card-img" src="../assets/image/Parts1.png" />
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
</style>
