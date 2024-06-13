<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href class="" @click="back">Назад</a>
  </div>
  <h2 class="leas-title">ремонт спецтехники</h2>
  <div class="catalog-service">
    <CatalogServiceCard
      v-for="service of services"
      :key="service.id"
      :url="'/services/' + service.id"
      :img="service.image"
      :title="service.title"
      :text="service.description"
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CatalogServiceCard from "@/components/CatalogServiceCard.vue"; // @ is an alias to /src
import Service1 from "../assets/image/Service1.png";
import Service2 from "../assets/image/Service2.png";

@Options({
  components: {
    CatalogServiceCard,
  },
  data() {
    return { services: [], Service1, Service2 };
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },
  mounted() {
    fetch("https://chelstroymash.ru/api/services/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.services = data;
      });
  },
  created() {
    document.title =
      'ООО Торговый Дом "Челябинские Строительные Машины" | Услуги';
  },
})
export default class CatalogService extends Vue {}
</script>
<style lang="scss"></style>
