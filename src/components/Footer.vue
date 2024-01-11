<template>
  <div class="footer">
    <div class="footer-top">
      <img class="logo" src="../assets/Logo.svg" alt="" />
      <div class="catalog">
        <a class="catalog-link" href="/tech">Перейти в каталог</a>
        <img class="arrow" src="../assets/icon/Arrow.svg" alt="" />
        <div class="circle"></div>
      </div>
      <div class="contact">
        <a class="contact-link" href="">Отправить заявку</a>
        <img class="arrow" src="../assets/icon/Arrow.svg" alt="" />
        <div class="circle"></div>
      </div>
    </div>

    <div class="footer-menu">
      <nav class="menu-item">
        <h3 class="footer-title">КОМПАНИЯ</h3>
        <a class="menu-link" href="/tech">Спецтехника</a>
        <a class="menu-link" href="/leasing">Лизинг</a>
        <a class="menu-link" href="/parts">Запчасти</a>
        <a class="menu-link" href="/ServiceCatalog">Ремонт спецтехники</a>
        <a class="menu-link" href="/paymentAndDelivery">Оплата и доставка</a>
        <a class="menu-link" href="/contacts">Контакты</a>
      </nav>
      <nav class="menu-item">
        <h3 class="footer-title">КАТАЛОГ</h3>
        <a class="menu-link" href="/techCards">Трактора</a>
        <a class="menu-link" href="">Бурильные машины</a>
        <a class="menu-link" href="">Бульдозеры</a>
        <a class="menu-link" href="">Трубоукладчики</a>
        <a class="menu-link" href="">Машины для забивки и погружения </a>
        <a class="menu-link" href="">Запчасти </a>
      </nav>
      <div class="contact-footer">
        <h3 class="footer-title">КОНТАКТЫ</h3>
        <p class="contact-footer-info">
          8 (000) 000-00-00 <br />
          Отдел продаж <br />
          +7 (000) 000-00-00 <br />
          info@mail.ru <br />
          09:00 - 18:00 (UTC +5)<br />г. Уфа, ул. Льва Толстого, д. 13 <br />
        </p>
        <div class="social">
          <img class="soc" src="../assets/icon/Telegram.svg" alt="" />
          <img class="soc" src="../assets/icon/Whatsapp.svg" alt="" />
          <img class="soc" src="../assets/icon/Mail.svg" alt="" />
          <img class="soc" src="../assets/icon/Vk.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Footer extends Vue {}
</script>
<style>
.footer {
  margin-top: 42px;
  padding: 46px 180px;
  height: 100vh;
  background: url("../assets/image/Footer-bg.png") no-repeat center center /
    cover;

  .footer-top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin-top: 46px;
    text-align: left;
    .catalog {
      display: flex;
      align-items: center;
      .catalog-link {
        text-decoration: none;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        color: #000;
      }
      .arrow {
        margin: 0 6px;
      }
      .circle {
        width: 60px;
        height: 60px;
        background-color: #ffcc00;
        border-radius: 50%;
      }
    }
    .contact {
      display: flex;
      align-items: center;
      .contact-link {
        text-decoration: none;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        color: #000;
      }
      .circle {
        width: 60px;
        height: 60px;
        background-color: #ffcc00;
        border-radius: 50%;
      }
      .arrow {
        margin: 0 6px;
      }
    }
  }
  .footer-menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 72px;
    .menu-item {
      text-align: left;

      .menu-link {
        font-size: 24px;
        margin-top: 24px;
        text-decoration: none;
        color: black;
        display: block;
      }

      .footer-title {
        font-size: 24px;
        font-weight: 700;
        color: #000;
      }
    }
    .contact-footer {
      text-align: left;
      .footer-title {
        font-size: 24px;
        font-weight: 700;
        color: #000;
      }
      .contact-footer-info {
        line-height: 2;
        font-size: 24px;
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
  }
}
</style>
