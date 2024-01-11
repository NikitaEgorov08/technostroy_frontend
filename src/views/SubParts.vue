<template>
  <div class="sub-parts">
    <div class="back">
      <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
      <a href="" class="">Назад</a>
    </div>

    <h2 class="parts-title">Запасные части к тракторам</h2>

    <div class="catalog-main">
      <SubPartsCard title="узлы/агрегаты" :img="Engines" />
      <SubPartsCard title="комплектующие" :img="Components" />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SubPartsCard from "@/components/SubPartsCard.vue"; // @ is an alias to /src
import Engines from "../assets/image/Engines.png";
import Components from "../assets/image/Components.png";

@Options({
  components: {
    SubPartsCard,
  },
  data() {
    return { Engines, Components };
  },
})
export default class SubParts extends Vue {}
</script>
<style lang="scss">
.sub-parts {
}
</style>
