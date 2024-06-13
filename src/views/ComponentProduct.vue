<template>
  <div class="back">
    <div>
      <span v-for="(item, idx) of breadcrumbs" :key="item.id">
        <router-link :to="item.link">{{ item.title }}</router-link>
        <span style="padding: 0 8px" v-if="idx + 1 !== breadcrumbs.length"
          >/</span
        >
      </span>
    </div>
  </div>
  <h1 class="leas-title">{{ title }}</h1>
  <div class="component-product">
    <div class="tech-product-hero">
      <span class="ru-sng-mobile">Доставка по России и СНГ</span>
      <div class="top-mobile">
        <a
          class="favourite-btn-mobile"
          @click="addToCart"
          v-if="cart.findIndex((el) => el.title === title) === -1"
          >В избранное</a
        >
        <a class="favourite-btn-mobile-added" @click="addToCart" v-else
          >В избранном</a
        >
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
          <a
            class="favourite-btn"
            @click="addToCart"
            v-if="cart.findIndex((el) => el.title === title) === -1"
            >В избранное</a
          >
          <a class="favourite-btn-added" @click="addToCart" v-else
            >В избранном</a
          >
          <button class="request-btn" @click="showModalPrice">Купить</button>
          <button
            class="forms-btn forms-btn-adaptive"
            @click="showModalLeasing"
            v-if="allowLeasing"
          >
            Купить в лизинг
          </button>
        </div>
      </div>
    </div>
  </div>

  <leasing-request-modal
    v-show="leasingRequestModalVisibility"
    @close="closeModalLeasing"
  />
  <request-tech
    type="part"
    :product_title="title"
    @close="closeModalPrice"
    v-show="priceModalVisibility"
  ></request-tech>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairPriceModal from "@/components/Forms/RepairPriceModal.vue";
import LeasingRequestModal from "@/components/Forms/LeasingRequestModal.vue";

import CalcDeliveryModal from "@/components/Forms/CalcDeliveryModal.vue";
import RequestTech from "@/components/Forms/RequestTech.vue";

@Options({
  components: {
    RequestTech,
    RepairPriceModal,
    LeasingRequestModal,
    CalcDeliveryModal,
  },

  data() {
    return {
      priceModalVisibility: false,
      leasingRequestModalVisibility: false,
      calcDeliveryModalVisibility: false,
      title: "",
      text: "",
      img: "",
      inStock: false,
      allowLeasing: false,
      compatibility: "",
      article_number: "",
      breadcrumbs: [],
      cart: [],
    };
  },
  computed: {},
  methods: {
    showModalLeasing() {
      this.leasingRequestModalVisibility = true;
    },
    closeModalLeasing() {
      this.leasingRequestModalVisibility = false;
    },
    showModalPrice() {
      this.priceModalVisibility = true;
    },
    closeModalPrice() {
      this.priceModalVisibility = false;
    },
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
        this.cart.push(tovar);
        localStorage.setItem("cart", JSON.stringify(currentCartItems));
      } else {
        localStorage.setItem("cart", JSON.stringify([tovar]));
      }
    },
  },
  mounted() {
    const id = this.$route.params.idPart;
    const idCat = this.$route.params.idCat;
    const idSub = this.$route.params.idSub;
    fetch("https://chelstroymash.ru/api/parts/" + id + "/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        if (res.status === 404) {
          window.location.href = "https://chelstroymash.ru/404.html";
        }
      })
      .then((data) => {
        this.title = data.title;
        this.text = data.description;
        this.img = data.image;
        this.inStock = data.in_stock;
        this.allowLeasing = data.allow_leasing;
        this.compatibility = data.compatibility;
        this.article_number = data.article_number;

        fetch("https://chelstroymash.ru/api/parts-categories/" + idCat + "/")
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            if (res.status === 404) {
              window.location.href = "https://chelstroymash.ru/404.html";
            }
          })
          .then((cat) => {
            fetch(
              "https://chelstroymash.ru/api/parts-subcategories/" + idSub + "/"
            )
              .then((res) => {
                if (res.ok) {
                  return res.json();
                }
                if (res.status === 404) {
                  window.location.href = "https://chelstroymash.ru/404.html";
                }
              })
              .then((sub) => {
                document.title =
                  'ООО Торговый Дом "Челябинские Строительные Машины" | ' +
                  data.title;
                this.breadcrumbs = [
                  { id: 0, title: "Каталог", link: `/parts/` },
                  { id: cat.id, title: cat.title, link: `/parts/${idCat}` },
                  {
                    id: sub.id,
                    title: sub.title,
                    link: `/parts/${idCat}/${idSub}`,
                  },
                  {
                    id: data.id,
                    title: data.title,
                    link: `/parts/${idCat}/${idSub}/${id}`,
                  },
                ];
              });
          });
      });
    const currentCart = localStorage.getItem("cart");
    if (currentCart) {
      this.cart = JSON.parse(currentCart);
    }
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
      text-align: justify;

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
        .favourite-btn-added {
          position: relative;
          text-decoration: none;
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
      .favourite-btn-mobile-added {
        position: relative;
        text-decoration: none;
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
    }
  }
  .component-product
    .tech-product-hero
    .component-product-info
    .component-product-buttons {
    margin-bottom: 40px;
  }
  .component-product
    .tech-product-hero
    .component-product-info
    .component-product-buttons
    .favourite-btn-added {
    display: none;
  }
}
</style>
