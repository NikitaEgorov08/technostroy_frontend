<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href class="" @click="back">Назад</a>
  </div>
  <h2 class="leas-title">О нас</h2>
  <div class="about">
    <AboutInfo />
    <Advantage />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import AboutInfo from "@/components/AboutInfo.vue"; // @ is an alias to /src
import Advantage from "@/components/Advantage.vue";

@Options({
  components: {
    AboutInfo,
    Advantage,
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },
})
export default class About extends Vue {}
</script>

<style></style>
