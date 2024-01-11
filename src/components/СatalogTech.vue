<template>
  <div class="catalog-main">
    <CatalogTechCard title="ТРАКТОРА" :img="Tractor" slug="traktora" />
    <CatalogTechCard
      title="БУРИЛЬНЫЕ МАШИНЫ"
      :img="Drill"
      slug="burilnaya-mashina"
    />
    <CatalogTechCard
      title="ТРУБОУКЛАДЧИКИ"
      :img="Three"
      slug="truboukladchiki"
    />
    <CatalogTechCard title="СВАЕБОИ/копры" :img="Piles" slug="svaeboi" />
    <CatalogTechCard title="БУЛЬДОЗЕРЫ" :img="Bulldozer" slug="buldozery" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CatalogTechCard from "@/components/CatalogTechCard.vue"; // @ is an alias to /src
import Tractor from "../assets/image/Tractor.png";
import Drill from "../assets/image/Drill.png";
import Three from "../assets/image/Three.png";
import Piles from "../assets/image/Piles.png";
import Bulldozer from "../assets/image/Bulldozer.png";

@Options({
  components: {
    CatalogTechCard,
  },
  data() {
    return { Tractor, Drill, Three, Piles, Bulldozer };
  },
})
export default class CatalogTech extends Vue {}
</script>
<style>
.catalog-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 64px;
}
</style>
