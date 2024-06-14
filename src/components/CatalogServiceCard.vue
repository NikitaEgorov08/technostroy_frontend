<template>
  <div class="catalog-service-card">
    <img class="service-img" :src="img" alt="" />
    <div class="service-card-info">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ text }}</p>
      <router-link
        :to="url"
        class="detail"
        @click="$store.dispatch('setServiceItemID', id)"
        >Подробнее</router-link
      >
      <button class="forms-btn service-card-btn" @click="showModal">
        Отправить заявку
      </button>
    </div>
  </div>
  <repair-cars-modal
    :product_title="title"
    v-show="repairCarsModalVisibility"
    @close="closeModal"
  />
  <repair-parts-modal v-show="repairPartsModalVisibility" @close="closeModal" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairCarsModal from "./Forms/RepairCarsModal.vue";
import RepairPartsModal from "./Forms/RepairPartsModal.vue";

@Options({
  components: { RepairCarsModal, RepairPartsModal },
  props: ["img", "title", "text", "url", "id"],
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
    width: 466px;
    height: 378px;
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

      right: 0;
    }
  }
}
@media (max-width: 1600px) {
  .catalog-service-card .service-img {
    height: 280px;
    margin-right: 40px;
  }
  .catalog-service-card {
  }
}
@media (max-width: 1365px) {
  .catalog-service-card {
    padding: 32px 64px;
  }
  .catalog-service-card .service-img {
    height: 240px;
    margin-right: 24px;
  }
  .catalog-service-card .service-card-info .card-text {
    font-size: 16px;
  }
}
@media (max-width: 1000px) {
  .catalog-service-card {
    padding: 32px;
    display: block;
  }
  .catalog-service-card .service-img {
    height: auto;
    margin-right: 0;
  }
  .catalog-service-card .service-card-info .service-card-btn {
    position: static;
    display: flex;

    margin: 24px auto;
  }
}
@media (max-width: 768px) {
  .catalog-service-card .service-img {
    width: 100%;
  }
}
</style>
