<template>
  <div class="catalog-service-card">
    <img class="service-img" src="../assets/image/Service-img.png" />
    <div class="service-card-info">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ text }}</p>
      <router-link to="/Service" class="detail">Подробнее</router-link>
      <button class="forms-btn service-card-btn" @click="showModal">
        Отправить заявку
      </button>
    </div>
  </div>
  <repair-cars-modal v-show="repairCarsModalVisibility" @close="closeModal" />
  <repair-parts-modal v-show="repairPartsModalVisibility" @close="closeModal" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairCarsModal from "./Forms/RepairCarsModal.vue";
import RepairPartsModal from "./Forms/RepairPartsModal.vue";

@Options({
  components: { RepairCarsModal, RepairPartsModal },
  props: ["img", "title", "text"],
  data() {
    return {
      repairCarsModalVisibility: false,
      repairPartsModalVisibility: false,
    };
  },
  methods: {
    showModal() {
      if (this.title === "Ремонт спецтехники") {
        this.repairCarsModalVisibility = true;
      } else {
        this.repairPartsModalVisibility = true;
      }
    },
    closeModal() {
      this.repairCarsModalVisibility = false;
      this.repairPartsModalVisibility = false;
    },
  },
})
export default class CatalogServiceCard extends Vue {}
</script>
<style>
.catalog-service-card {
  display: flex;
  padding: 64px;
  .service-img {
    margin-right: 84px;
  }
  .service-card-info {
    text-align: left;
    position: relative;
    .card-text {
      font-size: 18px;
    }
    .detail {
      color: #000;
    }
    .service-card-btn {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
