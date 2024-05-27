<template>
  <h2 class="home-title">НАШИ ПРЕИМУЩЕСТВА</h2>
  <div class="advantage">
    <template v-for="(item, idx) of advantages" :key="item.id">
      <AdvantageCard
        :img="item.icon"
        :title="item.title"
        :text="item.description"
      />
      <div class="vertical-line" v-if="idx + 1 !== advantages.length"></div>
    </template>
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
    return { Advantage1, Advantage2, Advantage3, Advantage4, advantages: [] };
  },
  mounted() {
    fetch("http://31.128.39.64:8000/api/benefits")
      .then((res) => res.json())
      .then((data) => (this.advantages = data));
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
