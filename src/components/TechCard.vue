<template>
  <div class="tech-card">
    <img class="tech-card-img" src="../assets/image/Drill.png" />
    <div class="tech-card-item">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ text }}</p>
      <div class="tech-card-buttons">
        <button class="forms-btn" @click="showModalLeasing">
          Купить в лизинг
        </button>
        <router-link to="/techProduct" class="forms-btn">Подробнее</router-link>
      </div>
    </div>
    <div class="tech-card-top">
      <a class="favourite-btn" href="">В избранное</a>
      <span class="status">В наличии</span>
    </div>
  </div>
  <leasing-request-modal
    v-show="leasingRequestModalVisibility"
    @close="closeModalLeasing"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LeasingRequestModal from "@/components/Forms/LeasingRequestModal.vue";

@Options({
  components: { LeasingRequestModal },
  props: ["title", "text", "img"],
  data() {
    return {
      leasingRequestModalVisibility: false,
    };
  },
  methods: {
    showModalLeasing() {
      this.leasingRequestModalVisibility = true;
    },

    closeModalLeasing() {
      this.leasingRequestModalVisibility = false;
    },
  },
})
export default class TechCard extends Vue {}
</script>
<style>
.tech-card {
  position: relative;
  margin: 48px;
  padding: 24px;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;

  .tech-card-top {
    position: absolute;
    top: 4%;
    right: 2%;

    .favourite-btn {
      position: relative;
      text-decoration: none;
      color: #f60707;
      margin-right: 56px;
      &::after {
        content: url("../assets/icon/Favourite.svg");
        position: absolute;
        right: -20%;
      }
    }

    .status {
    }
  }
  .tech-card-item {
    text-align: left;
    margin-left: 86px;
    .card-title {
    }
    .tech-card-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 200px;
    }
  }
}
</style>
