<template>
  <div class="back" id="TechCards">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href class="" @click="back">Назад</a>
  </div>
  <h2 class="leas-title">{{ title }}</h2>
  <div class="catalog-service">
    <TechCard
      v-for="car of cars"
      :key="car.id"
      :title="car.title"
      :img="car.image"
      :allowLeasing="car.allow_leasing"
      :inStock="car.in_stock"
      :text="car.text_description"
      :url="'/tech/' + $router.params.idCarCat + '/' + car.id"
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TechCard from "@/components/TechCard.vue"; // @ is an alias to /src

@Options({
  components: {
    TechCard,
  },
  data() {
    return {
      cars: [],
    };
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },

  mounted() {
    const idCarCat = this.$route.params.idCarCat;
    fetch(`http://45.12.238.17:8000/api/cars?category=${idCarCat}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.cars = data;
      });
  },
})
export default class TechCards extends Vue {}
</script>
<style lang="scss"></style>
