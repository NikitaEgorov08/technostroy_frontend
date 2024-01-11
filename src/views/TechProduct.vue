<template>
  <h2>Буровая машина БМП 045</h2>
  <div class="tech-product">
    <div class="tech-product-hero">
      <div class="tech-product-gallery">
        <img class="tech-card-img" src="../assets/image/Drill2.png" />
      </div>
      <div class="tech-product-info">
        <span class="">Доставка по России и СНГ</span>
        <span class="status">В наличии</span>

        <h3>Буровая машина БМП 045</h3>
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
          <a class="favourite-btn" href="">В избранное</a>
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

@Options({
  components: { RepairPriceModal, LeasingRequestModal, GetOfferModal },
  props: ["title", "text", "img"],
  data() {
    return {
      repairPriceModalVisibility: false,
      leasingRequestModalVisibility: false,
      getOfferModalVisibility: false,
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
        max-width: 80%;
      }
    }
    .status {
      position: absolute;
      top: 4%;
      right: 2%;
    }
    .tech-product-info {
      margin-left: 86px;
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
      .get-offer {
        margin: 0 auto;
      }
    }
  }
  .description {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
}
</style>
