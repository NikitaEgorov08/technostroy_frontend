<template>
  <div class="advantage-card">
    <img class="icon" src="../assets/icon/Advantage1.svg" />
    <div class="card-title">{{ title }}</div>
    <div class="card-text">{{ text }}</div>
    <div class="card-text2">{{ text2 }}</div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: ["img", "title", "text", "text2"],
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
    width: 64px;
    height: 64px;
    background-color: #ffcc00;
    border-radius: 50%;
    padding: 32px;
    margin: 28px 0;
  }
  .card-title {
    text-align: left;
    font-size: 24px;
  }
  .card-text {
    margin-top: 24px;
    text-align: left;
  }
  .card-text2 {
    margin-top: 24px;
    text-align: left;
  }
}
</style>
