<template>
  <div class="component-card">
    <div class="component-card-top">
      <a class="favourite-btn" href="">В избранное</a>
      <span class="status">В наличии</span>
    </div>
    <img class="component-card-img" src="../assets/image/Service-img.png" />
    <div class="service-card-info">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ text }}</p>
      <router-link to="/ComponentProduct" class="detail">Подробнее</router-link>
      <button class="forms-btn service-card-btn">Купить</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: ["img", "title", "text"],
})
export default class ComponentCard extends Vue {}
</script>
<style>
.component-card {
  border: 1px solid #fc0;
  background: #fff;
  padding: 36px;
  .component-card-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    .favourite-btn {
      position: relative;
      text-decoration: none;
      color: #f60707;

      &::after {
        content: url("../assets/icon/Favourite.svg");
        position: absolute;
        right: -20%;
      }
    }

    .status {
    }
  }
  .component-card-img {
    width: 100%;
  }
  .service-card-info {
    text-align: left;
    position: relative;
    .card-text {
      font-size: 18px;
    }
    .detail {
      color: #000;
      position: absolute;
      right: 0;
    }
    .service-card-btn {
      margin: 0 auto;
      margin-top: 80px;
    }
  }
}
</style>
