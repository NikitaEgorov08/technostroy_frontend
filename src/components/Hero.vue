<template>
  <Header />
  <div class="hero">
    <h1>Продажа, лизинг и ремонт спецтехники</h1>
    <img class="banner" src="../assets/image/Banner.png" alt="" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue"; // @ is an alias to /src

@Options({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>
<style>
.hero {
  position: relative;
  height: calc(100vh - 200px);
  .banner {
    width: 100%;
    height: 100%;
  }
}
h1 {
  font-family: Roboto;
  font-size: 64px;
  font-weight: 500;
  position: absolute;
  left: 50%;
  bottom: 2%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 1);
  text-wrap: nowrap;
  margin: 0;
}
</style>
