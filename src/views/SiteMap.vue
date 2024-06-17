<template>
  <div class="map-container">
    <h1 class="leas-title map-title">Карта сайта</h1>
    <div>
      <h3 class="map-title">Компания</h3>
      <nav class="map-nav">
        <router-link class="map-menu-link" to="/tech">Спецтехника</router-link>
        <router-link class="map-menu-link" to="/leasing">Лизинг</router-link>
        <router-link class="map-menu-link" to="/parts">Запчасти</router-link>
        <router-link class="map-menu-link" to="/services"
          >Ремонт спецтехники</router-link
        >
        <router-link class="map-menu-link" to="/paymentAndDelivery"
          >Оплата и доставка</router-link
        >
        <router-link class="map-menu-link" to="/contacts">Контакты</router-link>
      </nav>
    </div>
    <div>
      <h3 class="map-title">Спецтехника</h3>
      <nav class="map-nav">
        <details v-for="category of categories" :key="category.id">
          <summary>
            <router-link
              class="map-menu-link"
              :to="
                '/tech/' +
                (category.title === 'Трактора'
                  ? 'traktora'
                  : category.title === 'Бульдозеры'
                  ? 'buldozery'
                  : category.title === 'Сваебои/Копры'
                  ? 'svaeboi'
                  : category.title === 'Трубоукладчики'
                  ? 'truboukladchiki'
                  : category.title === 'Бурильные машины'
                  ? 'burilnaya-mashina'
                  : null)
              "
              >{{ category.title }}</router-link
            >
          </summary>
          <router-link
            v-for="item of category.cars"
            :key="item.id"
            :to="
              '/tech/' +
              (category.title === 'Трактора'
                ? 'traktora'
                : category.title === 'Бульдозеры'
                ? 'buldozery'
                : category.title === 'Сваебои/Копры'
                ? 'svaeboi'
                : category.title === 'Трубоукладчики'
                ? 'truboukladchiki'
                : category.title === 'Бурильные машины'
                ? 'burilnaya-mashina'
                : null) +
              '/' +
              convertLetters(item.title)
            "
          >
            {{ item.title }}</router-link
          >
        </details>
      </nav>
    </div>
    <div>
      <h3 class="map-title">Запчасти</h3>
      <nav class="map-nav">
        <details v-for="category of categoriesParts" :key="category.id">
          <summary>
            <router-link
              class="map-menu-link"
              :to="'/parts/' + convertLetters(category.title)"
              >{{ category.title }}</router-link
            >
          </summary>
          <span>
            <router-link
              class="map-menu-link"
              :to="
                '/parts/' + convertLetters(category.title) + '/yzly_i_agregaty'
              "
              >Узлы и агрегаты</router-link
            >
            <router-link
              v-for="part of category.sub[1].parts"
              :key="part.id"
              class="map-menu-link sublink"
              :to="`/parts/${convertLetters(
                category.title
              )}/yzly_i_agregaty/${convertLetters(part.title)}`"
              >{{ part.title }}</router-link
            >
          </span>
          <span>
            <router-link
              class="map-menu-link"
              :to="
                '/parts/' + convertLetters(category.title) + '/komplektyyuschie'
              "
              >Комплектующие</router-link
            >
            <router-link
              v-for="part of category.sub[0].parts"
              :key="part.id"
              class="map-menu-link sublink"
              :to="`/parts/${convertLetters(
                category.title
              )}/komplektyyuschie/${convertLetters(part.title)}`"
              >{{ part.title }}</router-link
            >
          </span>
        </details>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { convertLetters } from "@/utils";
import { Vue, Options } from "vue-class-component";

@Options({
  data() {
    return {
      categories: [],
      categoriesParts: [],
    };
  },
  methods: { convertLetters },
  mounted() {
    fetch("https://chelstroymash.ru/api/cars-categories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.categories = data.map((i: any) => ({ ...i, cars: [] }));
        for (let category of data) {
          fetch(`https://chelstroymash.ru/api/cars/?category=${category.id}`)
            .then((res) => res.json())
            .then((cars) => {
              const idx = this.categories.findIndex(
                (i: any) => i.id === category.id
              );
              this.categories[idx].cars = cars;
            });
        }
      });
    fetch("https://chelstroymash.ru/api/parts-categories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.categoriesParts = data.map((p: any) => ({
          ...p,
          sub: [
            { url: "yzly_i_agregaty", parts: [] },
            { url: "komplektyyuschie", parts: [] },
          ],
        }));
        for (let category of data) {
          fetch(
            `https://chelstroymash.ru/api/parts/?category=${
              category.id
            }&subcategory=${1}`
          )
            .then((res) => res.json())
            .then((data) => {
              const idx = this.categoriesParts.findIndex(
                (i: any) => i.id === category.id
              );
              this.categoriesParts[idx].sub[0].parts = data;
            });
          fetch(
            `https://chelstroymash.ru/api/parts/?category=${
              category.id
            }&subcategory=${2}`
          )
            .then((res) => res.json())
            .then((data) => {
              const idx = this.categoriesParts.findIndex(
                (i: any) => i.id === category.id
              );
              this.categoriesParts[idx].sub[1].parts = data;
            });
        }
      });
  },
})
export default class SiteMap extends Vue {}
</script>
<style>
.leas-title.map-title {
  margin-left: 0;
}
.map-container {
  margin-left: 32px;
}
.map-menu-link {
  margin: 20px;
}
.map-menu-link.sublink {
  margin-left: 48px !important;
}
.map-title {
  text-align: left;
}
.map-nav {
  text-align: left;
}
details summary a {
  display: inline;
  margin-left: 0 !important;
}
details a {
  display: block;
  margin-top: 12px;
  margin-left: 32px !important;
}
</style>
