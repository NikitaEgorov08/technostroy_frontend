<template>
  <div class="back" id="TechCards">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href="" class="">Назад</a>
  </div>
  <h2 class="leas-title">бурильные машины</h2>
  <div class="catalog-service">
    <TechCard
      img=""
      title="Буровая машина БМП 045"
      text="Буровая машина передвижная предназначена для бурения скважин вращательным способом со шнековой очисткой под сваи, опоры и для других инженерно-строительных целей."
    />
  </div>

  <div class="catalog-service">
    <TechCard
      img=""
      title="Буровая машина БМП 045"
      text="Буровая машина передвижная предназначена для бурения скважин вращательным способом со шнековой очисткой под сваи, опоры и для других инженерно-строительных целей."
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TechCard from "@/components/TechCard.vue"; // @ is an alias to /src

@Options({
  components: {
    TechCard,
  },
})
export default class TechCards extends Vue {}
</script>
<style lang="scss"></style>
