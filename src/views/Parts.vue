<template>
  <div class="parts">
    <div class="back">
      <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
      <a href="" class="">Назад</a>
    </div>

    <h2 class="parts-title">Запасные части к спецтехнике и комплектующие</h2>
    <span class="parts-subtitle"
      >Мы предлагаем как новые так и б/у (восстановленные) запчасти для
      спецтехники на базе тракторов ЧТЗ</span
    >
    <div class="catalog-main">
      <CatalogPartsCard title="запчасти для ТРАКТОРА" :img="PartsTractor" />
      <CatalogPartsCard
        title="запчасти для БУРИЛЬНЫх МАШИН"
        :img="PartsDrill"
      />
      <CatalogPartsCard
        title="запчасти для ТРУБОУКЛАДЧИКов"
        :img="PartsThree"
        slug="truboukladchiki"
      />
      <CatalogPartsCard title="запчасти для коперов" :img="PartsPiles" />
      <CatalogPartsCard
        title="запчасти для БУЛЬДОЗЕРов"
        :img="PartsBulldozer"
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
    return { PartsTractor, PartsDrill, PartsThree, PartsPiles, PartsBulldozer };
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
    display: flex;
  }
}
</style>
