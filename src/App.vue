<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Header from "@/components/Header.vue"; // @ is an alias to /src

import Footer from "./components/Footer.vue";

@Options({
  components: {
    Header,

    Footer,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
/* * {
  border: 1px solid red;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
body {
  margin: 0;
  background-color: #f2f2f2;
}
h3 {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
}
.back {
  text-align: left;
  margin-left: 80px;
  margin-top: 24px;
  .back-arrow {
    margin-right: 12px;
  }
  a {
    color: #000;
  }
}
h2 {
  text-align: left;
  margin-left: 64px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 80px;
  color: #000;
}
.home-title {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 80px;
  text-align: center;
  margin-left: 0;
}
.forms-btn {
  text-decoration: none;
  border: none;
  background-color: #ffcc00;
  padding: 8px 16px;
  border-radius: 6px;

  font-size: 18px;
  text-wrap: nowrap;
  color: #000;
  align-items: center;
  display: flex;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
}
.request-btn {
  text-decoration: none;
  border: none;
  background-color: #333;
  padding: 8px 20px;

  border-radius: 6px;
  font-size: 18px;
  text-wrap: nowrap;
  color: #ffcc00;
  align-items: center;

  cursor: pointer;
  &:hover {
    background-color: #222;
  }
  &:active {
    background-color: #000;
  }
}

.application-favorites {
  text-decoration: none;
  border: none;
  background-color: #333;
  padding: 0 42px;
  height: 60px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  text-wrap: nowrap;
  color: #ffcc00;
  align-items: center;
  display: flex;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #ffcc00;
  margin: 64px 0;
}
input:active {
  outline-color: #ffcc00;
}
input:focus {
  outline-color: #ffcc00;
}
textarea:active {
  outline-color: #ffcc00;
}
textarea:focus {
  outline-color: #ffcc00;
}
</style>
