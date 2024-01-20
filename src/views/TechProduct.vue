<template>
  <h2>Буровая машина БМП 045</h2>
  <div class="tech-product">
    <div class="tech-product-hero">
      <span class="ru-sng-mobile">Доставка по России и СНГ</span>
      <div class="top-mobile">
        <a class="favourite-btn-mobile" @click="addToCart">В избранное</a>
        <span class="status-mobile">В наличии</span>
      </div>
      <div class="tech-product-gallery">
        <!--  <img class="tech-card-img" src="../assets/image/Drill2.png" /> -->
      </div>
      <div class="tech-product-info">
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
        <a class="detailed-btn" href="">Подробнее</a>
        <div class="tech-product-buttons">
          <a class="favourite-btn" @click="addToCart">В избранное</a>
          <button class="request-btn" @click="showModalPrice">
            Запросить цену
          </button>
          <button class="forms-btn" @click="showModalLeasing">
            Купить в лизинг
          </button>
        </div>
        <button class="forms-btn get-offer" @click="showModalOffer">
          Получить коммерческое предложение
        </button>
      </div>
    </div>
    <div class="description">
      <div class="descr">
        <h3>Характеристики модели</h3>
        <p>Диаметр бурения, мм до 450</p>
      </div>
      <div class="equipment">
        <h3>Комплектация модели</h3>
        <p>Диаметр бурения, мм до 450</p>
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
  <get-offer-modal v-show="getOfferModalVisibility" @close="closeModalOffer" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairPriceModal from "@/components/Forms/RepairPriceModal.vue";
import LeasingRequestModal from "@/components/Forms/LeasingRequestModal.vue";
import GetOfferModal from "@/components/Forms/GetOfferModal.vue";
import CarouselTech from "@/components/CarouselTech.vue";

@Options({
  components: {
    RepairPriceModal,
    LeasingRequestModal,
    GetOfferModal,
    CarouselTech,
  },
  props: ["title", "text", "img"],
  data() {
    return {
      repairPriceModalVisibility: false,
      leasingRequestModalVisibility: false,
      getOfferModalVisibility: false,
      title: "Буровая машина БМП 045",
    };
  },
  methods: {
    showModalPrice() {
      this.repairPriceModalVisibility = true;
    },

    closeModalPrice() {
      this.repairPriceModalVisibility = false;
    },
    showModalLeasing() {
      this.leasingRequestModalVisibility = true;
    },

    closeModalLeasing() {
      this.leasingRequestModalVisibility = false;
    },
    showModalOffer() {
      this.getOfferModalVisibility = true;
    },

    closeModalOffer() {
      this.getOfferModalVisibility = false;
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
.tech-product {
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
    .tech-product-info {
      text-align: left;

      .detailed-btn {
        display: flex;
        justify-content: end;
        margin: 40px 0;
      }

      .tech-product-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 80px;
        flex-wrap: wrap;
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
      .get-offer {
        margin: 0 auto;
      }
    }
    .top-mobile {
      display: none;
    }
    .ru-sng-mobile {
      display: none;
    }
  }
  .description {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
}
@media (max-width: 1199px) {
  .tech-product .tech-product-hero .tech-product-info .tech-product-buttons {
    gap: 8px;
  }
}
@media (max-width: 1000px) {
  .tech-product {
    padding: 32px;
  }
  .tech-product .tech-product-hero {
    display: block;
    padding: 0;
  }
  .tech-product .tech-product-hero .tech-product-gallery .tech-card-img {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .tech-product .tech-product-hero .status {
    display: none;
  }
  .tech-product .tech-product-hero .ru-sng {
    display: none;
  }
  .tech-product
    .tech-product-hero
    .tech-product-info
    .tech-product-buttons
    .favourite-btn {
    display: none;
  }
  .tech-product .tech-product-hero {
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
  .tech-product .tech-product-hero .tech-product-info .tech-product-buttons {
    margin-bottom: 40px;
  }
  .tech-product .description {
    display: block;
    .descr {
      margin: 40px 0;
    }
  }
}
</style>
