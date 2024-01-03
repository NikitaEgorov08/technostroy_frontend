<template>
  <div class="catalog-main">
    <CatalogTechCard title="ТРАКТОРА" img="../assets/image/Drill.png" />
    <CatalogTechCard title="БУРИЛЬНЫЕ МАШИНЫ" img="../assets/image/Three.png" />
    <CatalogTechCard title="ТРУБОУКЛАДЧИКИ" img="../assets/image/Drill.png" />
    <CatalogTechCard title="КОПЕРЫ" img="../assets/image/Drill.png" />
    <CatalogTechCard title="БУЛЬДОЗЕРЫ" img="../assets/image/Drill.png" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CatalogTechCard from "@/components/CatalogTechCard.vue"; // @ is an alias to /src

@Options({
  components: {
    CatalogTechCard,
  },
  data() {
    return {};
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
