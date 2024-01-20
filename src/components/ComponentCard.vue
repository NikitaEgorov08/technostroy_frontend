<template>
  <div class="component-card">
    <div class="component-card-top">
      <a class="favourite-btn" @click="addToCart">В избранное</a>
      <span class="status" v-show="inStock">В наличии</span>
    </div>
    <img class="component-card-img" :src="img" />
    <div class="service-card-info">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ text.slice(0, 120) + "..." }}</p>
      <router-link :to="url" class="detail">Подробнее</router-link>
      <button class="forms-btn service-card-btn">Купить</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: ["img", "title", "text", "url", "inStock"],
  methods: {
    addToCart() {
      const tovar = {
        id: Math.round(Math.random() * 100),
        title: this.title,
        image: "http://localhost:8080/img/Tractor.135f9fd1.png",
        checked: false,
      };
      const currentCart = localStorage.getItem("cart");

      if (currentCart) {
        const currentCartItems = JSON.parse(currentCart!);
        currentCartItems.push(tovar);
        localStorage.setItem("cart", JSON.stringify(currentCartItems));
      } else {
        localStorage.setItem("cart", JSON.stringify([tovar]));
      }
    },
  },
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
      &:active {
        &::after {
          content: url("../assets/icon/FavouriteBlack.svg");
          position: absolute;
          right: -20%;
        }
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
@media (max-width: 1600px) {
  .component-card {
    padding: 24px;
  }
  .component-card .service-card-info .card-text {
    font-size: 14px;
  }
}
@media (max-width: 1365px) {
  .component-card {
    padding: 12px;
  }
}
@media (max-width: 768px) {
  .component-card {
    margin-top: 16px;
  }
}
</style>
