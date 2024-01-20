<template>
  <!--  <hooper :itemsToShow="3" :centerMode="true" pagination="no">
    <slide> slide 1 </slide>
    <slide> slide 2 </slide>
    ...
  </hooper> -->
  <div></div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

/* import { Hooper, Slide } from "hooper";

import "hooper/dist/hooper.css"; */

@Options({
  name: "App",
  components: {
    //Hooper,
    //Slide,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true,
      },
    };
  },
})
export default class CarouselTech extends Vue {}
</script>
<style></style>
