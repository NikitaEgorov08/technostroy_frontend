<template>
  <div class="tech-card">
    <div class="tech-card-top-mobile">
      <a class="favourite-btn-mobile" @click="addToCart">В избранное</a>
      <span class="status mobile">В наличии</span>
    </div>
    <img class="tech-card-img" :src="img" />
    <div class="tech-card-item">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ text.slice(0, 120) + "..." }}</p>
      <div class="tech-card-buttons">
        <button class="forms-btn" @click="showModalLeasing" v-if="allowLeasing">
          Купить в лизинг
        </button>
        <router-link to="/techProduct" class="forms-btn">Подробнее</router-link>
      </div>
    </div>
    <div class="tech-card-top">
      <a class="favourite-btn" @click="addToCart">В избранное</a>
      <span class="status" v-show="inStock">В наличии</span>
      <span class="status" v-show="!inStock">Под заказ</span>
    </div>
  </div>
  <leasing-request-modal
    v-show="leasingRequestModalVisibility"
    @close="closeModalLeasing"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LeasingRequestModal from "@/components/Forms/LeasingRequestModal.vue";

@Options({
  components: { LeasingRequestModal },
  props: ["title", "text", "img", "allowLeasing", "inStock"],

  data() {
    return {
      leasingRequestModalVisibility: false,
      state: {
        cart: [],
        cartCount: 0,
      },
    };
  },
  methods: {
    showModalLeasing() {
      this.leasingRequestModalVisibility = true;
    },

    closeModalLeasing() {
      this.leasingRequestModalVisibility = false;
    },
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
  computed: {
    totalPrice() {
      let total = 0;

      for (let item of this.$store.state.cart) {
        total += item.totalPrice;
      }

      return total.toFixed(2);
    },
  },
})
export default class TechCard extends Vue {}
</script>
<style>
.tech-card {
  position: relative;
  margin: 48px;
  padding: 24px;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  .tech-card-img {
    background-size: cover;
  }
  .tech-card-top {
    position: absolute;
    top: 4%;
    right: 2%;

    .favourite-btn {
      position: relative;
      text-decoration: none;
      color: #f60707;
      margin-right: 56px;
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
  .tech-card-top-mobile {
    display: none;
  }
  .tech-card-item {
    text-align: left;
    margin-left: 86px;
    .card-title {
    }
    .tech-card-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
@media (max-width: 1600px) {
  .tech-card .tech-card-img {
    height: auto;
    width: 100%;
  }
  .tech-card .tech-card-item {
    margin-left: 48px;
    font-size: 14px;
  }
}
@media (max-width: 1000px) {
  .tech-card {
    display: block;

    margin: 32px;
  }

  .tech-card .tech-card-img {
    margin: 32px 0;
  }
  .tech-card-top {
    display: none;
  }
  .tech-card {
    .tech-card-top-mobile {
      display: flex;
      justify-content: space-between;

      .favourite-btn-mobile {
        position: relative;
        text-decoration: none;
        color: #f60707;
        margin-right: 56px;
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
    }
  }
  .tech-card .tech-card-item {
    margin-left: 0;
  }
}
</style>
