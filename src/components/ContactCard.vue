<template>
  <div class="contact-card">
    <div class="cont-info">{{ name }}</div>
    <div class="cont-info">{{ jurInfo }}</div>
    <div class="cont-info">{{ jurAdd }}</div>

    <div class="cont-info">{{ officeAdd }}</div>
    <div class="cont-info">{{ tel1 }}</div>

    <div class="cont-info">{{ mail }}</div>

    <div class="social">
      <a href="https://t.me/+79193519559"
        ><img class="soc" src="../assets/icon/Telegram.svg"
      /></a>
      <a href="https://wa.me/79193519559"
        ><img class="soc" src="../assets/icon/Whatsapp.svg"
      /></a>
      <a href="mailto:info@chelstroymash.ru">
        <img class="soc" src="../assets/icon/Mail.svg" alt=""
      /></a>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: ["name", "jurInfo", "jurAdd", "officeAdd", "tel1", "tel2", "mail"],
})
export default class ContactCard extends Vue {}
</script>
<style>
.contact-card {
  text-align: left;
  .cont-info {
    margin-top: 12px;
  }
  .social {
    .soc {
      margin-right: 16px;
      margin-top: 12px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
