<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href class="" @click="back">Назад</a>
  </div>
  <h1 class="leas-title">{{ title }}</h1>
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

    fetch("https://chelstroymash.ru/api/services/" + serviceID + "/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          window.location.href = "https://chelstroymash.ru/404.html";
        }
      })
      .then((data) => {
        this.title = data.title;
        this.full_text = data.full_text;
        this.gallery = data.gallery;
        document.title =
          'ООО Торговый Дом "Челябинские Строительные Машины" | ' + data.title;
      });
  },
})
export default class Service extends Vue {}
</script>
<style lang="scss">
h1.leas-title,
h1.parts-title {
  text-align: left;
  margin-left: 64px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 80px;
  position: static;
  transform: none;
  font-family: sans-serif;
  width: unset;
  color: #000;
}
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
