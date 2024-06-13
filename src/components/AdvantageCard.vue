<template>
  <div class="advantage-card">
    <img class="icon" :src="img" alt="" />
    <div class="card-title">{{ title }}</div>
    <div class="card-text">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: ["img", "title", "text"],
})
export default class AdvantageCard extends Vue {}
</script>
<style>
.advantage-card {
  width: 400px;
  height: 512px;
  background-color: #d9d9d9;
  padding: 0 12px;
  margin-top: 24px;
  .icon {
    width: 56px;
    height: 56px;
    background-color: #ffcc00;
    border-radius: 50%;
    padding: 32px;
    margin: 28px 0;
  }
  .card-title {
    text-align: left;
    font-size: 24px;
    height: 64px;
  }
  .card-text {
    margin-top: 16px;
    text-align: left;
  }
  .card-text2 {
    margin-top: 16px;
    text-align: left;
  }
}
@media (max-width: 1600px) {
  .advantage-card .card-title {
    font-size: 18px;
  }
  .advantage-card .card-text {
    font-size: 14px;
  }
  .advantage-card .card-text2 {
    font-size: 14px;
  }
  .advantage-card .icon {
    padding: 16px;
  }
}
@media (max-width: 1199px) {
  .advantage-card {
    height: 600px;
  }

  .advantage-card .card-title {
    font-size: 16px;
  }
  .advantage-card .card-text {
    font-size: 14px;
  }
  .advantage-card .card-text2 {
    font-size: 14px;
  }
}
@media (max-width: 1000px) {
  .advantage-card {
    width: 90%;
    height: 512px;
  }
}
@media (max-width: 768px) {
  .advantage-card {
    height: 512px;
    scroll-snap-align: center;
    flex-shrink: 0;
    width: calc(100vw - 30px);
  }
}
</style>
