<template>
  <div class="about-info">
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
      <div class="info-text">
        Мы - профессиональная организация, специализирующаяся на продаже
        строительной спецтехники, а также предоставлении широкого ассортимента
        запасных частей к ней. В нашем ассортименте - широкий выбор строительной
        спецтехники, включая трактора, бульдозеры, копры/сваебои,
        трубоукладчики, бурильные машины и прочие виды техники. У нас есть
        оптимальные решения для различных проектов и задач.
      </div>
      <div class="info-text">
        Мы стремимся предложить нашим клиентам только высококачественную
        продукцию, отвечающую самым строгим стандартам отрасли.
      </div>
      <div class="info-text">
        Кроме того, наша компания предоставляет профессиональные услуги по
        ремонту и техническому обслуживанию строительной техники. Наши
        квалифицированные специалисты имеют богатый опыт работы с различными
        видами техники и готовы предложить качественные решения для устранения
        любых поломок или неисправностей.
      </div>
      <div class="info-text">
        Мы ценим каждого клиента и стремимся к долгосрочным и взаимовыгодным
        отношениям. Наша команда профессионалов всегда готова предоставить
        подробную консультацию, помочь выбрать оптимальное оборудование и
        запасные части для ваших задач, а также оказать качественные услуги по
        техническому обслуживанию и ремонту.
      </div>
      <div class="info-text">
        Выбирая Торговый Дом "Челябинские Строительные Машины", вы выбираете
        надежного партнера для эффективной и успешной работы. Надеемся на
        долгосрочное и плодотворное сотрудничество с вами!
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
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
}
</style>
