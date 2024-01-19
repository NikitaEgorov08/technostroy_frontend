<template>
  <h2>Ковш бульдозерный</h2>
  <div class="component-product">
    <div class="tech-product-hero">
      <span class="ru-sng-mobile">Доставка по России и СНГ</span>
      <div class="top-mobile">
        <a class="favourite-btn-mobile" @click="addToCart">В избранное</a>
        <span class="status-mobile">В наличии</span>
      </div>
      <div class="tech-product-gallery">
        <img class="tech-card-img" src="../assets/image/bucket.png" />
      </div>
      <div class="component-product-info">
        <span class="ru-sng">Доставка по России и СНГ</span>
        <span class="status">В наличии</span>

        <h3>{{ title }}</h3>
        <p class="product-info">
          Буровая машина передвижная предназначена для бурения скважин
          вращательным способом со шнековой очисткой под сваи, опоры и для
          других инженерно-строительных целей.
          <br />
          Буровая машина передвижная представляет собой многоцелевую установку с
          механическим приводом вращения бурильного инструмента, смонтированную
          на шасси гусеничного трактора-болотохода.
          <br />
          Буровая машина оснащена поворотной кассетой, что позволяет облегчить
          монтаж, демонтаж шнековой колонны и производить бурение комплектом
          бурового инструмента (щнек L- 4,5м., шнек с удлинителем L- 4,2/8,2м.,
          буровая головка) скважин глубиной до 12м.
        </p>

        <div class="component-product-buttons">
          <a class="favourite-btn" @click="addToCart">В избранное</a>
          <button class="request-btn" @click="showModalPrice">
            Запросить цену
          </button>
          <button
            class="forms-btn forms-btn-adaptive"
            @click="showModalLeasing"
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
  />
  <leasing-request-modal
    v-show="leasingRequestModalVisibility"
    @close="closeModalLeasing"
  />
  <calc-delivery-modal
    v-show="calcDeliveryModalVisibility"
    @close="closeModalDelivery"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairPriceModal from "@/components/Forms/RepairPriceModal.vue";
import LeasingRequestModal from "@/components/Forms/LeasingRequestModal.vue";

import CalcDeliveryModal from "@/components/Forms/CalcDeliveryModal.vue";

@Options({
  components: { RepairPriceModal, LeasingRequestModal, CalcDeliveryModal },
  props: ["title", "text", "img"],
  data() {
    return {
      repairPriceModalVisibility: false,
      leasingRequestModalVisibility: false,

      calcDeliveryModalVisibility: false,
      title: "Ковш бульдозерный",
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
  .forms-btn-adaptive {
    margin-left: auto;
    margin-top: 12px;
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
