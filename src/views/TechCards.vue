<template>
  <div class="back" id="TechCards">
    <div>
      <!--      <span>
        <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
        <a href class="" @click="back">Назад</a>
      </span>-->
      <span v-for="(item, idx) of breadcrumbs" :key="item.id">
        <router-link :to="item.link">{{ item.title }}</router-link>
        <span style="padding: 0 8px" v-if="idx + 1 !== breadcrumbs.length"
          >/</span
        >
      </span>
    </div>
  </div>
  <h2 class="leas-title">{{ title }}</h2>
  <div class="catalog-service" v-if="cars.length">
    <TechCard
      v-for="car of cars"
      :key="car.id"
      :title="car.title"
      :img="car.image"
      :allowLeasing="car.allow_leasing"
      :inStock="car.in_stock"
      :text="car.text_description"
      :url="'/tech/' + $route.params.idCarCat + '/' + car.id"
    />
  </div>
  <h3 v-else>К сожалению, в данной категории нет товаров</h3>
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
      title: "",
      cars: [],
      breadcrumbs: [],
    };
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },
  watch: {
    $route(to) {
      const idCarCat = to.params.idCarCat;
      fetch(`http://31.128.39.64:8000/api/cars?category=${idCarCat}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.cars = data;
        });
    },
  },
  mounted() {
    const idCarCat = this.$route.params.idCarCat;
    fetch(`http://31.128.39.64:8000/api/cars?category=${idCarCat}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.cars = data;
      });
    fetch("http://31.128.39.64:8000/api/cars-categories/" + idCarCat)
      .then((res) => res.json())
      .then((data) => {
        this.breadcrumbs = [
          { id: 0, title: "Каталог", link: `/tech/` },
          { id: data.id, title: data.title, link: `/tech/${idCarCat}` },
        ];
      });
  },
})
export default class TechCards extends Vue {}
</script>
<style lang="scss"></style>
