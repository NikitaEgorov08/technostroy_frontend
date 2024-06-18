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
  <h1 class="leas-title">{{ title }}</h1>
  <div class="catalog-service" v-if="cars.length">
    <TechCard
      v-for="car of cars"
      :key="car.id"
      :title="car.title"
      :img="car.image"
      :allowLeasing="car.allow_leasing"
      :inStock="car.in_stock"
      :text="car.text_description"
      :url="
        '/catalog/' + $route.params.idCarCat + '/' + convertLetters(car.title)
      "
      :id="car.id"
    />
  </div>
  <h3 v-else>К сожалению, в данной категории нет товаров</h3>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TechCard from "@/components/TechCard.vue"; // @ is an alias to /src
import { convertLetters } from "@/utils";

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
    convertLetters,
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
    getData(idCarCat: number) {
      fetch(`https://chelstroymash.ru/api/cars/?category=${idCarCat}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          if (res.status === 404) {
            window.location.href = "https://chelstroymash.ru/404.html";
          }
        })
        .then((data) => {
          this.cars = data;
        });
      fetch("https://chelstroymash.ru/api/cars-categories/" + idCarCat + "/")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          if (res.status === 404) {
            window.location.href = "https://chelstroymash.ru/404.html";
          }
        })
        .then((data) => {
          document.title =
            'ООО Торговый Дом "Челябинские Строительные Машины" | ' +
            data.title;
          const description = document.querySelector("meta[name=description]");
          description?.setAttribute(
            "content",
            "Купить " + data.title + " с доставкой по России и странам СНГ"
          );
          this.breadcrumbs = [
            { id: 0, title: "Каталог", link: `/catalog/` },
            {
              id: data.id,
              title: data.title,
              link: `/catalog/${this.$route.params.idCarCat}`,
            },
          ];
        });
    },
  },
  watch: {
    $route(to) {
      let idCarCat = this.$store.state.techCategoryID;
      if (idCarCat > 0) {
        fetch(`https://chelstroymash.ru/api/cars/?category=${idCarCat}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.cars = data;
          });
        fetch("https://chelstroymash.ru/api/cars-categories/" + idCarCat + "/")
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            if (res.status === 404) {
              window.location.href = "https://chelstroymash.ru/404.html";
            }
          })
          .then((data) => {
            document.title =
              'ООО Торговый Дом "Челябинские Строительные Машины" | ' +
              data.title;
            const description = document.querySelector(
              "meta[name=description]"
            );
            description?.setAttribute(
              "content",
              "Купить " + data.title + " с доставкой по России и странам СНГ"
            );
            this.breadcrumbs = [
              { id: 0, title: "Каталог", link: `/catalog/` },
              {
                id: data.id,
                title: data.title,
                link: `/catalog/${this.$route.params.idCarCat}`,
              },
            ];
          });
      } else {
        fetch("https://chelstroymash.ru/api/cars-categories/")
          .then((res) => res.json())
          .then((data) => {
            const categorySlug = this.$route.params.idCarCat;
            const map =
              categorySlug === "traktora"
                ? "Трактора"
                : categorySlug === "buldozery"
                ? "Бульдозеры"
                : categorySlug === "svaeboi"
                ? "Сваебои/Копры"
                : categorySlug === "truboukladchiki"
                ? "Трубоукладчики"
                : categorySlug === "burilnaya-mashina"
                ? "Бурильные машины"
                : null;
            idCarCat = data.find((item: any) => item.title === map)?.id;
            if (!idCarCat) {
              window.location.href = "https://chelstroymash.ru/404.html";
            }
            fetch(`https://chelstroymash.ru/api/cars?category=${idCarCat}/`)
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                this.cars = data;
              });
          });
        fetch("https://chelstroymash.ru/api/cars-categories/" + idCarCat + "/")
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            if (res.status === 404) {
              window.location.href = "https://chelstroymash.ru/404.html";
            }
          })
          .then((data) => {
            document.title =
              'ООО Торговый Дом "Челябинские Строительные Машины" | ' +
              data.title;
            const description = document.querySelector(
              "meta[name=description]"
            );
            description?.setAttribute(
              "content",
              "Купить " + data.title + " с доставкой по России и странам СНГ"
            );
            this.breadcrumbs = [
              { id: 0, title: "Каталог", link: `/catalog/` },
              {
                id: data.id,
                title: data.title,
                link: `/catalog/${this.$route.params.idCarCat}`,
              },
            ];
          });
      }
    },
  },
  mounted() {
    const idCarCat = this.$store.state.techCategoryID;
    if (idCarCat > 0) {
      this.getData(idCarCat);
      console.log(idCarCat);
    } else {
      fetch("https://chelstroymash.ru/api/cars-categories/")
        .then((res) => res.json())
        .then((data) => {
          const categorySlug = this.$route.params.idCarCat;
          const map =
            categorySlug === "traktora"
              ? "Трактора"
              : categorySlug === "buldozery"
              ? "Бульдозеры"
              : categorySlug === "svaeboi"
              ? "Сваебои/Копры"
              : categorySlug === "truboukladchiki"
              ? "Трубоукладчики"
              : categorySlug === "burilnaya-mashina"
              ? "Бурильные машины"
              : null;
          const id = data.find((item: any) => item.title === map)?.id;
          console.log("id: ", id);

          if (!id) {
            window.location.href = "https://chelstroymash.ru/404.html";
          }
          this.getData(id);
        });
    }
  },
})
export default class TechCards extends Vue {}
</script>
<style lang="scss"></style>
