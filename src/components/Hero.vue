<template>
  <div class="hero">
    <div class="slider-container">
      <div class="menu">
        <label for="slide-dot-1"></label>
        <label for="slide-dot-2"></label>
        <label for="slide-dot-3"></label>
        <label for="slide-dot-4"></label>
      </div>
      <h1>Продажа, лизинг и ремонт спецтехники</h1>
      <input id="slide-dot-1" type="radio" name="slides" checked />
      <div class="slide slide-1"></div>
      <input id="slide-dot-2" type="radio" name="slides" />
      <div class="slide slide-2"></div>
      <input id="slide-dot-3" type="radio" name="slides" />
      <div class="slide slide-3"></div>
      <input id="slide-dot-4" type="radio" name="slides" />
      <div class="slide slide-4"></div>
    </div>
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

  .slider-container {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  .menu {
    position: absolute;

    z-index: 900;
    bottom: 2%;
    left: 2%;
  }
  .menu label {
    cursor: pointer;
    display: inline-block;
    width: 24px;
    height: 24px;
    background: #ffcc00;
    border-radius: 50px;
    margin: 0 2em 1em;
  }
  .menu label:hover,
  .menu label:focus {
    background: #fff;
  }

  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 2;

    background-size: cover;
    background-position: 50% 50%;
    transition: left 0s 0.75s;
  }
  [id^="slide"]:checked + .slide {
    left: 0;
    z-index: 100;
    transition: left 0.75s ease-out;
  }
  .slide-1 {
    background-image: url("../assets/image/Banner.png");
  }
  .slide-2 {
    background-image: url("../assets/image/Banner2.png");
  }
  .slide-3 {
    background-image: url("../assets/image/Banner3.png");
  }
  .slide-4 {
    background-image: url("../assets/image/Banner4.png");
  }
}

@media (max-width: 1600px) {
  .hero {
    height: calc(100vh - 154px);
    .menu label {
      width: 16px;
      height: 16px;

      margin: 0 0.5em 1em;
    }
  }
}
@media (max-width: 1000px) {
  .hero {
    height: calc(100vh - 120px);
  }
}
@media (max-width: 768px) {
  .hero {
    height: 50vh;
    .slider-container {
      height: 100%;
      position: relative;
      .menu {
        bottom: 6%;
        width: 100%;
      }
    }
  }
}
</style>
