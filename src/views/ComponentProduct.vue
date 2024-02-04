<template>
  <h2>{{ title }}</h2>
  <div class="component-product">
    <div class="tech-product-hero">
      <span class="ru-sng-mobile">Доставка по России и СНГ</span>
      <div class="top-mobile">
        <a class="favourite-btn-mobile" @click="addToCart">В избранное</a>
        <span class="status-mobile">В наличии</span>
      </div>
      <div class="tech-product-gallery">
        <img class="tech-card-img" :src="img" />
      </div>
      <div class="component-product-info">
        <span class="ru-sng">Доставка по России и СНГ</span>
        <span class="status" v-if="inStock">В наличии</span>
        <span class="status" v-else>Под заказ</span>

        <h3>{{ title }}</h3>
        <span class="compatibility">Совместим с: {{ compatibility }}</span>
        <span class="article-number">Артикул: {{ article_number }}</span>

        <p class="product-info">
          {{ text }}
        </p>

        <div class="component-product-buttons">
          <a class="favourite-btn" @click="addToCart">В избранное</a>
          <button class="request-btn" @click="showModalPrice">
            Запросить цену
          </button>
          <button
            class="forms-btn forms-btn-adaptive"
            @click="showModalLeasing"
            v-if="allowLeasing"
          >
            Купить в лизинг
          </button>
        </div>
        <button class="forms-btn calc-delivery" @click="showModalDelivery">
          Расчитать стоимость доставки
        </button>
      </div>
    </div>
  </div>
  <repair-price-modal
    v-show="repairPriceModalVisibility"
    @close="closeModalPrice"
    :product_title="title"
  />
  <leasing-request-modal
    v-show="leasingRequestModalVisibility"
    @close="closeModalLeasing"
  />
  <calc-delivery-modal
    v-show="calcDeliveryModalVisibility"
    @close="closeModalDelivery"
    :product_title="title"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairPriceModal from "@/components/Forms/RepairPriceModal.vue";
import LeasingRequestModal from "@/components/Forms/LeasingRequestModal.vue";

import CalcDeliveryModal from "@/components/Forms/CalcDeliveryModal.vue";

@Options({
  components: { RepairPriceModal, LeasingRequestModal, CalcDeliveryModal },

  data() {
    return {
      repairPriceModalVisibility: false,
      leasingRequestModalVisibility: false,
      calcDeliveryModalVisibility: false,
      title: "",
      text: "",
      img: "",
      inStock: false,
      allowLeasing: false,
      compatibility: "",
      article_number: "",
    };
  },
  methods: {
    showModalDelivery() {
      this.calcDeliveryModalVisibility = true;
    },
    closeModalDelivery() {
      this.calcDeliveryModalVisibility = false;
    },
    showModalLeasing() {
      this.leasingRequestModalVisibility = true;
    },
    closeModalLeasing() {
      this.leasingRequestModalVisibility = false;
    },
    showModalPrice() {
      this.repairPriceModalVisibility = true;
    },
    closeModalPrice() {
      this.repairPriceModalVisibility = false;
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
  mounted() {
    const id = this.$route.params.idPart;
    fetch("http://45.12.238.17:8000/api/parts/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.title = data.title;
        this.text = data.description;
        this.img = data.image;
        this.inStock = data.in_stock;
        this.allowLeasing = data.allow_leasing;
        this.compatibility = data.compatibility;
        this.article_number = data.article_number;
      });
  },
})
export default class TechProduct extends Vue {}
</script>
<style>
.component-product {
  padding: 0 68px;
  .tech-product-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 24px;
    position: relative;
    .tech-product-gallery {
      .tech-card-img {
        display: flex;
        max-width: 80%;
      }
    }
    .status {
      position: absolute;
      top: 4%;
      right: 2%;
    }
    .component-product-info {
      text-align: left;

      .detailed-btn {
        display: flex;
        justify-content: end;

        margin: 40px 0;
      }

      .component-product-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 32px;
        margin-bottom: 140px;
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
      }
      .calc-delivery {
        margin: 0 auto;
      }
      .compatibility {
        display: block;
        margin-top: 8px;
      }
    }
    .ru-sng-mobile {
      display: none;
    }
    .top-mobile {
      display: none;
    }
    .component-product .tech-product-hero .top-mobile {
      display: none;
    }
    .component-product .tech-product-hero .ru-sng-mobile {
      display: none;
    }
  }
}
@media (max-width: 1199px) {
  .component-product
    .tech-product-hero
    .component-product-info
    .component-product-buttons {
    gap: 8px;
  }
}
@media (max-width: 1000px) {
  .component-product {
    padding: 32px;
    .component-product-buttons {
      .favourite-btn {
        display: none;
      }
    }
  }
  .component-product .tech-product-hero {
    display: block;
    padding: 0;
  }
  .component-product .tech-product-hero .tech-product-gallery .tech-card-img {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .component-product .tech-product-hero .status {
    display: none;
  }
  .component-product .tech-product-hero .ru-sng {
    display: none;
  }
  .component-product .tech-product-hero {
    .ru-sng-mobile {
      text-align: left;

      align-items: center;
      display: flex;
      gap: 8px;
      &::before {
        content: url("../assets/icon/Delivery-icon.svg");
      }
    }
    .top-mobile {
      display: flex;
      justify-content: space-between;
      padding: 24px 0;
      .favourite-btn-mobile {
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
    }
  }
  .component-product
    .tech-product-hero
    .component-product-info
    .component-product-buttons {
    margin-bottom: 40px;
  }
}
</style>
