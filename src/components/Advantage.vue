<template>
  <h2 class="home-title">НАШИ ПРЕИМУЩЕСТВА</h2>
  <div class="advantage">
    <AdvantageCard
      img="../assets/icon/Advantage1.png"
      title="Осуществляем
    ремонт и техническую поддержку техники"
      text="Наша команда состоит из
    опытных мастеров, которые постоянно совершенствуются и проходят обучение,
    чтобы быть в курсе последних технологий и решений."
      text2="Мы
    предоставляем гарантию на все выполненные работы и установленные запчасти."
    />
    <div class="vertical-line"></div>
    <AdvantageCard
      img="../assets/icon/Advantage1.png"
      title="Осуществляем
    ремонт и техническую поддержку техники"
      text="Наша команда состоит из
    опытных мастеров, которые постоянно совершенствуются и проходят обучение,
    чтобы быть в курсе последних технологий и решений."
      text2="Мы
    предоставляем гарантию на все выполненные работы и установленные запчасти."
    />
    <div class="vertical-line"></div>
    <AdvantageCard
      img="../assets/icon/Advantage1.png"
      title="Осуществляем
    ремонт и техническую поддержку техники"
      text="Наша команда состоит из
    опытных мастеров, которые постоянно совершенствуются и проходят обучение,
    чтобы быть в курсе последних технологий и решений."
      text2="Мы
    предоставляем гарантию на все выполненные работы и установленные запчасти."
    />
    <div class="vertical-line"></div>
    <AdvantageCard
      img="../assets/icon/Advantage1.png"
      title="Осуществляем
    ремонт и техническую поддержку техники"
      text="Наша команда состоит из
    опытных мастеров, которые постоянно совершенствуются и проходят обучение,
    чтобы быть в курсе последних технологий и решений."
      text2="Мы
    предоставляем гарантию на все выполненные работы и установленные запчасти."
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AdvantageCard from "@/components/AdvantageCard.vue"; // @ is an alias to /src

@Options({
  components: {
    AdvantageCard,
  },
})
export default class Advantage extends Vue {}
</script>
<style>
.advantage {
  padding: 32px 64px;
  display: flex;
  justify-content: space-between;
}
.vertical-line {
  width: 2px;
  height: 556px;
  margin: 0 8px;
  background-color: #fc0;
  display: flex;
  align-items: center;
}
@media (max-width: 1000px) {
  .advantage {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 32px;
  }
  .vertical-line {
    display: none;
  }
}
@media (max-width: 768px) {
  .advantage {
    flex-wrap: nowrap;

    scroll-behavior: smooth;
    justify-content: space-between;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 8px;
    margin-bottom: 16px;
  }
}
</style>
