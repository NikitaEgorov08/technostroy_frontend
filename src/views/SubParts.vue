<template>
  <div class="sub-parts">
    <div class="back">
      <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
      <a href="" class="">Назад</a>
    </div>

    <h2 class="parts-title">Запасные части к тракторам</h2>

    <div class="catalog-main">
      <SubPartsCard title="узлы/агрегаты" img="../assets/image/Drill.png" />
      <SubPartsCard title="комплектующие" img="../assets/image/Three.png" />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SubPartsCard from "@/components/SubPartsCard.vue"; // @ is an alias to /src

@Options({
  components: {
    SubPartsCard,
  },
})
export default class SubParts extends Vue {}
</script>
<style lang="scss">
.sub-parts {
}
</style>
