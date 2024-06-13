<template>
  <div class="about-info">
    <div class="about-info-titles-mobile">
      <div class="info-title-mobile">ПРИВЕТСТВУЕМ ВАС</div>
      <div class="info-subtitle-mobile">
        НА ОФИЦИАЛЬНОМ САЙТЕ <br />
        ТОРГОВОГО ДОМА <br />
        "ЧЕЛЯБИНСКИЕ СТРОИТЕЛЬНЫЕ МАШИНЫ"
      </div>
    </div>
    <div class="gallery">
      <img class="about-bg" src="../assets/image/Gears.png" alt="" />
      <img class="about-img1" src="../assets/image/About1.png" alt="" />
      <img class="about-img2" src="../assets/image/About2.png" alt="" />

      <img class="about-img3" src="../assets/image/About3.png" alt="" />
    </div>
    <div class="info">
      <div class="info-title">ПРИВЕТСТВУЕМ ВАС</div>
      <div class="info-subtitle">
        НА ОФИЦИАЛЬНОМ САЙТЕ <br />
        ТОРГОВОГО ДОМА <br />
        "ЧЕЛЯБИНСКИЕ СТРОИТЕЛЬНЫЕ МАШИНЫ"
      </div>
      <div class="info-text" v-html="text"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  data() {
    return { text: "" };
  },
  mounted() {
    fetch("https://chelstroymash.ru/api/about/")
      .then((res) => res.json())
      .then((data) => (this.text = data[0].text));
  },
})
export default class AboutInfo extends Vue {}
</script>
<style>
.about-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 64px;

  .about-bg {
    position: absolute;
    top: -4%;
    left: 90%;
    z-index: -1;
  }
  .gallery {
    width: 676px;
    height: 884px;
    background-color: grey;
    position: relative;

    .about-img1 {
      position: absolute;
      left: 10%;
      top: 10%;
    }
    .about-img2 {
      position: absolute;
      left: 25%;
      top: 35%;
    }
    .about-img3 {
      position: absolute;
      left: 40%;
      top: 60%;
    }
  }
  .info {
    .info-title {
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      color: #ffcc00;
      text-align: right;
    }
    .info-subtitle {
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      text-align: right;

      color: #000;
      margin-bottom: 86px;
    }
    .info-text {
      text-align: left;

      margin-top: 24px;
      font-size: 18px;
      font-weight: 400;
      line-height: 130%; /* 23.4px */
      letter-spacing: 0.36px;
    }
  }
  .about-info-titles-mobile {
    display: none;
  }
}
@media (max-width: 1899px) {
  .about-info {
    grid-column-gap: 140px;
  }
}
@media (max-width: 1600px) {
  .about-info .gallery {
    width: 480px;
  }
  .about-info .gallery {
    .about-img1,
    .about-img2,
    .about-img3 {
      height: 30%;
    }
  }
  .about-info .info .info-subtitle {
    margin-bottom: 32px;
    font-size: 18px;
  }
  .about-info .about-bg {
    left: 84%;
  }
}
@media (max-width: 1365px) {
  .about-info {
    grid-column-gap: 64px;
    padding: 32px 64px;
  }

  .about-info .gallery {
    width: 420px;
    height: auto;
    .about-img1 {
      left: 20%;
    }
    .about-img2 {
      left: 35%;
    }
    .about-img3 {
      left: 50%;
    }
  }
  .about-info .info .info-subtitle {
    margin-bottom: 32px;
    font-size: 16px;
  }
  .about-info .about-bg {
    left: 80%;
  }
  .about-info .info .info-text {
    font-size: 14px;
  }
}
@media (max-width: 1199px) {
  .about-info {
    grid-column-gap: 8px;
  }
  .about-info .gallery {
    width: 360px;
    height: auto;
    .about-img1 {
      height: 20%;
      left: 30%;
      top: 25%;
    }
    .about-img2 {
      height: 20%;
      left: 42%;
      top: 42%;
    }
    .about-img3 {
      height: 20%;
      left: 50%;
    }
  }
}
@media (max-width: 1000px) {
  .about-info .info .info-title {
    display: none;
  }
  .about-info .info .info-subtitle {
    display: none;
  }
  .about-info {
    display: flex;
    flex-wrap: wrap;
    padding: 32px;

    .about-bg {
      position: absolute;
      top: -30%;
      left: 80%;
      z-index: -1;
      height: 40%;
      transform: rotate(-90deg);
    }
    .gallery {
      width: 100%;
      height: 300px;
      background-color: grey;
      position: relative;
      margin: 40px 0;

      .about-img1 {
        position: absolute;
        height: 140px;
        left: 10%;
        top: -10%;
      }
      .about-img2 {
        position: absolute;
        height: 140px;
        left: 35%;
        top: 25%;
      }
      .about-img3 {
        position: absolute;
        height: 140px;
        left: 60%;
        top: 65%;
      }
    }

    .about-info-titles-mobile {
      display: block;
      margin: 16px;
      .info-title-mobile {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        color: #ffcc00;
        text-align: left;
      }
      .info-subtitle-mobile {
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        text-align: left;

        color: #000;
      }
    }
  }
}
@media (max-width: 768px) {
  .about-info .gallery {
    height: 200px;
  }
  .about-info .gallery .about-img1 {
    height: 80px;
  }
  .about-info .gallery .about-img2 {
    height: 80px;
    top: 27%;
  }
  .about-info .gallery .about-img3 {
    height: 80px;
  }
}
</style>
