<template>
  <h2>Ковш бульдозерный</h2>
  <div class="component-product">
    <div class="tech-product-hero">
      <div class="tech-product-gallery">
        <img class="tech-card-img" src="../assets/image/bucket.png" />
      </div>
      <div class="component-product-info">
        <span class="">Доставка по России и СНГ</span>
        <span class="status">В наличии</span>

        <h3>Ковш бульдозерный</h3>
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
          <a class="favourite-btn" href="">В избранное</a>
          <button class="request-btn" @click="showModalPrice">
            Запросить цену
          </button>
          <button class="forms-btn">Купить в лизинг</button>
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
  <calc-delivery-modal
    v-show="calcDeliveryModalVisibility"
    @close="closeModalDelivery"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairPriceModal from "@/components/Forms/RepairPriceModal.vue";

import CalcDeliveryModal from "@/components/Forms/CalcDeliveryModal.vue";

@Options({
  components: { RepairPriceModal, CalcDeliveryModal },
  props: ["title", "text", "img"],
  data() {
    return {
      repairPriceModalVisibility: false,
      calcDeliveryModalVisibility: false,
    };
  },
  methods: {
    showModalDelivery() {
      this.calcDeliveryModalVisibility = true;
    },

    closeModalDelivery() {
      this.calcDeliveryModalVisibility = false;
    },

    showModalPrice() {
      this.repairPriceModalVisibility = true;
    },

    closeModalPrice() {
      this.repairPriceModalVisibility = false;
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
        max-width: 80%;
      }
    }
    .status {
      position: absolute;
      top: 4%;
      right: 2%;
    }
    .component-product-info {
      margin-left: 86px;
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
        }
      }
      .calc-delivery {
        margin: 0 auto;
      }
    }
  }
}
</style>
