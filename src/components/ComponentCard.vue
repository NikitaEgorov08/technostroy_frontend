<template>
  <div class="component-card">
    <div class="component-card-top">
      <a class="favourite-btn" @click="addToCart">В избранное</a>
      <span class="status" v-show="inStock">В наличии</span>
    </div>
    <img class="component-card-img" :src="img" />
    <div class="service-card-info">
      <h3 class="card-title">{{ title }}</h3>
      <span class="compatibility">Совместим с: {{ compatibility }}</span>
      <span class="article-number">Артикул: {{ article_number }}</span>
      <p class="card-text">{{ text.slice(0, 120) + "..." }}</p>
    </div>
    <router-link :to="url" class="detail">Подробнее</router-link>
    <button class="forms-btn service-card-btn" @click="showModalPrice">
      Купить
    </button>
  </div>
  <request-tech
    v-show="repairPriceModalVisibility"
    @close="closeModalPrice"
    :product_title="title"
    type="part"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairPriceModal from "@/components/Forms/RepairPriceModal.vue";
import RequestTech from "@/components/Forms/RequestTech.vue";

@Options({
  components: { RequestTech, RepairPriceModal },
  props: [
    "img",
    "title",
    "text",
    "url",
    "inStock",
    "compatibility",
    "article_number",
  ],
  data() {
    return {
      repairPriceModalVisibility: false,
    };
  },
  methods: {
    addToCart() {
      const tovar = {
        id: Math.round(Math.random() * 100),
        title: this.title,
        image: this.img,
        type: "part",
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
    showModalPrice() {
      this.repairPriceModalVisibility = true;
    },

    closeModalPrice() {
      this.repairPriceModalVisibility = false;
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
  position: relative;
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
    height: 180px;
    object-fit: contain;
  }
  .service-card-info {
    text-align: left;
    position: relative;
    .card-text {
      font-size: 18px;
      min-height: 180px;
    }

    .compatibility {
      display: block;
      margin-top: 8px;
    }
  }
  .detail {
    color: #000;
    position: absolute;
    right: 1%;
    bottom: 10%;
    &:hover {
      color: #f60707;
    }
  }
  .service-card-btn {
    position: absolute;
    bottom: 1%;

    left: 50%;
    transform: translateX(-50%);
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
