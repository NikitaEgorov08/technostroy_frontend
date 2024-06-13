<template>
  <div class="tech">
    <div class="back">
      <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
      <a href class="" @click="back">Назад</a>
    </div>

    <h2>СПЕЦТЕХНИКА</h2>
    <CatalogTech />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CatalogTech from "@/components/СatalogTech.vue";

@Options({
  components: {
    CatalogTech,
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.push("/");
    },
  },
  created() {
    document.title = "ООО Торговый Дом \"Челябинские Строительные Машины\" | Каталог спецтехники"
  }
})
export default class Tech extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background-color: #f2f2f2;
}

.tech {
  .back {
    text-align: left;
    margin-left: 80px;

    .back-arrow {
      margin-right: 12px;
    }

    a {
      color: #000;
    }
  }
}
</style>
