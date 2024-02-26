<template>
  <div class="back" id="TechCards">
    <div>
      <span v-for="(item, idx) of breadcrumbs" :key="item.id">
        <router-link :to="item.link">{{ item.title }}</router-link>
        <span style="padding: 0 8px" v-if="idx + 1 !== breadcrumbs.length"
          >/</span
        >
      </span>
    </div>
  </div>
  <h2>{{ title }}</h2>
  <div class="tech-product">
    <div class="tech-product-hero">
      <span class="ru-sng-mobile">Доставка по России и СНГ</span>
      <div class="top-mobile">
        <a class="favourite-btn-mobile" @click="addToCart">В избранное</a>
        <span class="status-mobile" v-show="inStock">В наличии</span>
        <span class="status-mobile" v-show="!inStock">Под заказ</span>
      </div>
      <div class="tech-product-gallery">
        <img class="tech-card-img" :src="img" />
      </div>
      <div class="tech-product-info">
        <span class="ru-sng">Доставка по России и СНГ</span>

        <span class="status" v-show="inStock">В наличии</span>
        <span class="status" v-show="!inStock">Под заказ</span>

        <h3>{{ title }}</h3>
        <p class="product-info">
          {{ text }}
        </p>
        <a class="detailed-btn" href="#desc">Подробнее</a>
        <div class="tech-product-buttons">
          <a class="favourite-btn" @click="addToCart">В избранное</a>
          <button class="request-btn" @click="showRequestTechModal">
            Оставить заявку
          </button>
          <button class="forms-btn" @click="showModalLeasing">
            Купить в лизинг
          </button>
        </div>
      </div>
    </div>
    <div class="description" v-if="character.length" id="desc">
      <div class="descr">
        <h3>Характеристики модели</h3>
        <p v-html="character"></p>
      </div>
      <div class="equipment" v-if="complectation.length">
        <h3>Комплектация модели</h3>
        <p v-html="complectation"></p>
      </div>
    </div>
  </div>
  <leasing-request-modal
    :product_title="title"
    v-show="leasingRequestModalVisibility"
    @close="closeModalLeasing"
  />
  <request-tech
    type="tech"
    :product_title="title"
    v-show="requestTechModalVisibility"
    @close="closeRequestTechModal"
  ></request-tech>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairPriceModal from "@/components/Forms/RepairPriceModal.vue";
import LeasingRequestModal from "@/components/Forms/LeasingRequestModal.vue";
import GetOfferModal from "@/components/Forms/GetOfferModal.vue";
import CarouselTech from "@/components/CarouselTech.vue";
import RequestTech from "@/components/Forms/RequestTech.vue";

@Options({
  components: {
    RequestTech,
    RepairPriceModal,
    LeasingRequestModal,
    GetOfferModal,
    CarouselTech,
  },
  data() {
    return {
      requestTechModalVisibility: false,
      leasingRequestModalVisibility: false,
      title: "",
      text: "",
      img: "",
      product_name: "",
      inStock: false,
      allowLeasing: false,
      character: [],
      complectation: [],
      breadcrumbs: [],
    };
  },
  methods: {
    showModalLeasing() {
      this.leasingRequestModalVisibility = true;
    },
    closeModalLeasing() {
      this.leasingRequestModalVisibility = false;
    },
    showRequestTechModal() {
      this.requestTechModalVisibility = true;
    },
    closeRequestTechModal() {
      this.requestTechModalVisibility = false;
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
        localStorage.setItem("cart", JSON.stringify(currentCartItems));
      } else {
        localStorage.setItem("cart", JSON.stringify([tovar]));
      }
    },
  },
  mounted() {
    const idCar = this.$route.params.idCar;
    const idCarCat = this.$route.params.idCarCat;

    fetch(`http://45.12.238.17:8000/api/cars/${idCar}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.title = data.title;
        this.text = data.text_description;
        this.img = data.image;
        this.inStock = data.in_stock;
        this.allowLeasing = data.allow_leasing;
        this.character = data.character;
        this.complectation = data.complectation;

        fetch("http://45.12.238.17:8000/api/cars-categories/" + idCarCat)
          .then((res) => res.json())
          .then((bc) => {
            this.breadcrumbs = [
              { id: 0, title: "Каталог", link: `/tech/` },
              { id: bc.id, title: bc.title, link: `/tech/${idCarCat}` },
              { id: data.id, title: data.title, link: `/tech/${idCarCat}` },
            ];
          });
      });
  },
})
export default class TechProduct extends Vue {}
</script>
<style>
b {
  font-weight: 700;
}
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
* {
  scroll-behavior: smooth;
}
</style>
