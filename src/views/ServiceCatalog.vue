<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href="" class="">Назад</a>
  </div>
  <h2 class="leas-title">ремонт спецтехники</h2>
  <div class="catalog-service">
    <CatalogServiceCard
      url="/Service"
      :img="Service1"
      title="Ремонт спецтехники"
      text="Наше дело не так однозначно, как может показаться: современная методология разработки выявляет срочную потребность кластеризации усилий. Есть над чем задуматься: реплицированные с зарубежных источников, современные исследования будут представлены в исключительно положительном свете. И нет сомнений, что ключевые особенности структуры проекта набирают популярность среди определенных слоев населения, а значит, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности."
    />
    <CatalogServiceCard
      url="/ServiceComponents"
      :img="Service2"
      title="Ремонт узлов и агрегатов"
      text="Наше дело не так однозначно, как может показаться: современная методология разработки выявляет срочную потребность кластеризации усилий. Есть над чем задуматься: реплицированные с зарубежных источников, современные исследования будут представлены в исключительно положительном свете. И нет сомнений, что ключевые особенности структуры проекта набирают популярность среди определенных слоев населения, а значит, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности."
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CatalogServiceCard from "@/components/CatalogServiceCard.vue"; // @ is an alias to /src
import Service1 from "../assets/image/Service1.png";
import Service2 from "../assets/image/Service2.png";
@Options({
  components: {
    CatalogServiceCard,
  },
  data() {
    return { Service1, Service2 };
  },
})
export default class CatalogService extends Vue {}
</script>
<style lang="scss"></style>
