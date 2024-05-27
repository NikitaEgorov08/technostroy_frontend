<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href class="" @click="back">Назад</a>
  </div>
  <h2 class="leas-title">{{ title }}</h2>
  <div class="service">
    <div class="service-img">
      <img
        v-for="item of gallery"
        :key="item.image"
        class="service-img-item"
        :src="item.image"
        alt=""
      />
    </div>
    <div class="service-text">
      {{ full_text }}
    </div>
    <button class="forms-btn service-btn" @click="showModal">
      Отправить заявку
    </button>
  </div>
  <repair-cars-modal v-show="repairCarsModalVisibility" @close="closeModal" />
  <repair-parts-modal v-show="repairPartsModalVisibility" @close="closeModal" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairCarsModal from "@/components/Forms/RepairCarsModal.vue";
import RepairPartsModal from "@/components/Forms/RepairPartsModal.vue";

@Options({
  components: { RepairPartsModal, RepairCarsModal },
  data() {
    return {
      gallery: [],
      title: "",
      full_text: "",
      repairCarsModalVisibility: false,
      repairPartsModalVisibility: false,
    };
  },
  methods: {
    showModal() {
      if (this.title.toUpperCase() === "РЕМОНТ СПЕЦТЕХНИКИ") {
        this.repairCarsModalVisibility = true;
      } else {
        this.repairPartsModalVisibility = true;
      }
    },
    closeModal() {
      this.repairCarsModalVisibility = false;
      this.repairPartsModalVisibility = false;
    },
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },
  mounted() {
    const serviceID = this.$route.params.id;

    fetch("http://31.128.39.64:8000/api/services/" + serviceID)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.title = data.title;
        this.full_text = data.full_text;
        this.gallery = data.gallery;
        console.log(this.gallery);
      });
  },
})
export default class Service extends Vue {}
</script>
<style lang="scss">
.service {
  padding: 64px;

  .service-img {
    display: flex;
    justify-content: space-between;

    .service-img-item {
      width: 30%;
    }
  }

  .service-text {
    text-align: left;
    padding: 80px 0;
  }

  .service-btn {
    margin-left: auto;
  }
}

@media (max-width: 1365px) {
  .service .service-text {
    text-align: left;
    padding: 40px 0;
  }
}

@media (max-width: 1000px) {
  .service {
    padding: 32px;
  }
}
</style>
