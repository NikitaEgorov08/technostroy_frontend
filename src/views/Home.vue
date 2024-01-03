<template>
  <div class="home">
    <Hero />
    <CatalogTech />
    <div class="line"></div>

    <AboutInfo />
    <div class="line"></div>

    <Advantage />
    <Payment />
    <div class="line"></div>

    <ContactsHome />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "@/components/Hero.vue";
import CatalogTech from "@/components/СatalogTech.vue";
import AboutInfo from "@/components/AboutInfo.vue"; // @ is an alias to /src
import Advantage from "@/components/Advantage.vue";
import Payment from "@/components/Payment.vue";
import ContactsHome from "@/components/ContactsHome.vue";
@Options({
  components: {
    Hero,
    CatalogTech,
    AboutInfo,
    Advantage,
    Payment,
    ContactsHome,
  },
})
export default class Home extends Vue {}
</script>

<style></style>
