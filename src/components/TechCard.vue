<template>
  <div class="tech-card">
    <div class="tech-card-top-mobile">
      <a
        class="favourite-btn-mobile"
        @click="addToCart"
        v-if="cart.findIndex((el) => el.title === title) === -1"
        >В избранное</a
      >
      <a class="favourite-btn-mobile-added" @click="addToCart" v-else
        >В избранном</a
      >
      <span class="status mobile">В наличии</span>
    </div>
    <img class="tech-card-img" :src="img" alt="" />
    <div class="tech-card-item">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ text.slice(0, 120) + "..." }}</p>
      <div class="tech-card-buttons">
        <button class="forms-btn" @click="showModalLeasing" v-if="allowLeasing">
          Купить в лизинг
        </button>
        <router-link :to="url" class="forms-btn">Подробнее</router-link>
      </div>
    </div>
    <div class="tech-card-top">
      <a
        class="favourite-btn"
        @click="addToCart"
        v-if="cart.findIndex((el) => el.title === title) === -1"
        >В избранное</a
      >
      <a class="favourite-btn-added" @click="addToCart" v-else>В избранном</a>
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
  props: ["title", "text", "img", "allowLeasing", "inStock", "url"],

  data() {
    return {
      leasingRequestModalVisibility: false,
      state: {
        cart: [],
        cartCount: 0,
      },
      cart: [],
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
        image: this.img,
        type: "tech",
        checked: false,
      };
      const currentCart = localStorage.getItem("cart");

      if (currentCart) {
        const currentCartItems = JSON.parse(currentCart!);
        currentCartItems.push(tovar);
        this.cart.push(tovar);

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
  mounted() {
    const currentCart = localStorage.getItem("cart");
    if (currentCart) {
      this.cart = JSON.parse(currentCart);
    }
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
    max-width: 320px;
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
    .favourite-btn-added {
      position: relative;
      text-decoration: none;
      margin-right: 56px;
      color: #4ecb71;
      cursor: pointer;

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
      position: absolute;
      width: 60%;
      bottom: 5%;
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
      .favourite-btn-mobile-added {
        position: relative;
        text-decoration: none;
        color: #4ecb71;
        cursor: pointer;
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
  .tech-card .tech-card-item .tech-card-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: auto;
    gap: 8px;
    position: inherit;
  }
}
</style>
