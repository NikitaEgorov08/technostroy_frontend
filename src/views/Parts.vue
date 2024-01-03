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
      <CatalogPartsCard
        title="запчасти для ТРАКТОРА"
        img="../assets/image/Drill.png"
      />
      <CatalogPartsCard
        title="запчасти для БУРИЛЬНЫх МАШИН"
        img="../assets/image/Three.png"
      />
      <CatalogPartsCard
        title="запчасти для ТРУБОУКЛАДЧИКов"
        img="../assets/image/Drill.png"
      />
      <CatalogPartsCard
        title="запчасти для коперов"
        img="../assets/image/Drill.png"
      />
      <CatalogPartsCard
        title="запчасти для БУЛЬДОЗЕРов"
        img="../assets/image/Drill.png"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CatalogPartsCard from "@/components/CatalogPartsCard.vue"; // @ is an alias to /src

@Options({
  components: {
    CatalogPartsCard,
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
