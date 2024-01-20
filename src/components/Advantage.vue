<template>
  <h2 class="home-title">НАШИ ПРЕИМУЩЕСТВА</h2>
  <div class="advantage">
    <AdvantageCard
      :img="Advantage1"
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
      :img="Advantage2"
      title="Работаем без посредников"
      text="Мы работаем без посредников. Имеем собственную ремонтную базу, на которой осуществляем ремонт и восстановление спецтехники. "
      text2="Мы предлагаем широкий выбор спецтехники на базе ЧТЗ, а также индивидуальный подход к каждому клиенту."
    />
    <div class="vertical-line"></div>
    <AdvantageCard
      :img="Advantage3"
      title="Продаем  запасные части и навесное оборудование"
      text="В нашем ассортименте вы найдете как новые, так и бывшие в употреблении запчасти для всех видов спецтехники, а также по Вашему запросу укомплектуем спецтехнику навесным оборудованием (новым/востановленным) для выполнения различных работ. "
      text2="Мы заботимся о своих клиентах и предлагаем новые и б/у запчасти по доступным ценам."
    />
    <div class="vertical-line"></div>
    <AdvantageCard
      :img="Advantage4"
      title="Организуем  доставку"
      text="Мы организуем доставку спецтехники и запасных частей, сотрудничаем с проверенными автоперевозчиками и транспортными компаниями."
      text2="Наша компания заботится о своих клиентах и стремится сделать процесс приобретения спецтехники максимально комфортным и быстрым для вас."
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AdvantageCard from "@/components/AdvantageCard.vue";
import Advantage1 from "../assets/icon/Advantage1.svg";
import Advantage2 from "../assets/icon/Advantage2.svg";

import Advantage3 from "../assets/icon/Advantage3.svg";

import Advantage4 from "../assets/icon/Advantage4.svg";

@Options({
  components: {
    AdvantageCard,
  },
  data() {
    return { Advantage1, Advantage2, Advantage3, Advantage4 };
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
