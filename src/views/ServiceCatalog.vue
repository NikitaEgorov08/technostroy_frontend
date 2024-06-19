<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href class="" @click="back">Назад</a>
  </div>
  <h1 class="leas-title">ремонт спецтехники</h1>
  <div class="catalog-service">
    <CatalogServiceCard
      v-for="service of services"
      :key="service.id"
      :url="'/services/' + convertLetters(service.title)"
      :img="service.image"
      :title="service.title"
      :text="service.description"
      :id="service.id"
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CatalogServiceCard from "@/components/CatalogServiceCard.vue"; // @ is an alias to /src
import Service1 from "../assets/image/Service1.png";
import Service2 from "../assets/image/Service2.png";
import { convertLetters } from "@/utils";

@Options({
  components: {
    CatalogServiceCard,
  },
  data() {
    return { services: [], Service1, Service2 };
  },
  methods: {
    convertLetters,
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
      'Ремонт спецтехники | ООО Торговый Дом "Челябинские Строительные Машины"';
    const description = document.querySelector("meta[name=description]");
    description?.setAttribute(
      "content",
      "Ремонт спецтехники и узлов/агрегатов в Челябинске"
    );
  },
})
export default class CatalogService extends Vue {}
</script>
<style lang="scss"></style>
