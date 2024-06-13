<template>
  <div class="parts">
    <div class="back">
      <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
      <a href class="" @click="back">Назад</a>
    </div>

    <h1 class="parts-title">Запасные части к спецтехнике и комплектующие</h1>
    <span class="parts-subtitle">
      Мы предлагаем как новые так и б/у (восстановленные) запчасти для
      спецтехники на базе тракторов ЧТЗ</span
    >
    <div class="catalog-main catalog-main-mobile">
      <CatalogPartsCard
        v-for="item of categories"
        :key="item.id"
        :url="'/parts/' + item.id"
        :img="item.image"
        :title="item.title"
        :slug="
          item.title === 'Запчасти для трубоукладчиков'
            ? 'truboukladchiki'
            : null
        "
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CatalogPartsCard from "@/components/CatalogPartsCard.vue"; // @ is an alias to /src
import PartsTractor from "../assets/image/PartsTractor.png";
import PartsDrill from "../assets/image/PartsDrill.png";
import PartsThree from "../assets/image/PartsThree.png";
import PartsPiles from "../assets/image/PartsPiles.png";
import PartsBulldozer from "../assets/image/PartsBulldozer.png";

@Options({
  components: {
    CatalogPartsCard,
  },
  data() {
    return {
      categories: [],
      PartsTractor,
      PartsDrill,
      PartsThree,
      PartsPiles,
      PartsBulldozer,
    };
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.push("/");
    },
  },
  mounted() {
    fetch("https://chelstroymash.ru/api/parts-categories/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.categories = data;
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        window.location.href = "https://chelstroymash.ru/404.html";
      });
  },
  created() {
    document.title =
      'ООО Торговый Дом "Челябинские Строительные Машины" | Каталог запчастей';
  },
})
export default class Parts extends Vue {}
</script>
<style lang="scss">
.parts {
  .parts-subtitle {
    color: #000;
    font-size: 24px;
    margin-left: 64px;
    margin-top: 32px;
    display: flex;
  }
}

@media (max-width: 768px) {
  .parts {
    .catalog-main {
    }
  }
  .parts .parts-subtitle {
    font-size: 14px;
    padding: 12px 32px;
    margin: 0;
    text-align: left;
  }
}
</style>
