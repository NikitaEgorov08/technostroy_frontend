<template>
  <div class="hero">
    <h1>Продажа, лизинг и ремонт спецтехники</h1>
    <img class="banner" src="../assets/image/Banner.png" alt="" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
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

@media (max-width: 1600px) {
  .hero {
    height: calc(100vh - 154px);
  }
}
@media (max-width: 1000px) {
  .hero {
    height: calc(100vh - 120px);
  }
}
@media (max-width: 768px) {
  .hero {
    height: auto;
    position: relative;
  }
  .hero .banner {
    width: 100%;
    height: auto;
  }
}
</style>
