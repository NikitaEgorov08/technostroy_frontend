<template>
  <div class="footer">
    <div class="footer-top">
      <img class="logo" src="../assets/Logo.svg" alt="" />
      <div class="catalog" @click="$router.push('/tech')">
        <a class="catalog-link" href="/tech">Перейти в каталог</a>
        <img class="arrow" src="../assets/icon/Arrow.svg" alt="" />
        <div class="circle"></div>
      </div>
      <div class="contact" @click="showModal">
        <a class="contact-link">Заказать звонок</a>
        <img class="arrow" src="../assets/icon/Arrow.svg" alt="" />
        <div class="circle"></div>
      </div>
    </div>

    <div class="footer-menu">
      <nav class="menu-item">
        <h3 class="footer-title">КОМПАНИЯ</h3>
        <router-link class="menu-link" to="/tech">Спецтехника</router-link>
        <router-link class="menu-link" to="/leasing">Лизинг</router-link>
        <router-link class="menu-link" to="/parts">Запчасти</router-link>
        <router-link class="menu-link" to="/services"
          >Ремонт спецтехники</router-link
        >
        <router-link class="menu-link" to="/paymentAndDelivery"
          >Оплата и доставка</router-link
        >
        <router-link class="menu-link" to="/contacts">Контакты</router-link>
      </nav>
      <nav class="menu-item">
        <h3 class="footer-title">КАТАЛОГ</h3>
        <router-link
          class="menu-link"
          v-for="category of categories"
          :key="category.id"
          :to="'/tech/' + category.id"
          >{{ category.title }}</router-link
        >
      </nav>
      <div class="contact-footer">
        <h3 class="footer-title">КОНТАКТЫ</h3>
        <p class="contact-footer-info">
          +7 (919) 351-95-59 <br />
          Отдел продаж <br />
          +7 (919) 351-95-59 <br />
          info@chelstroymash.ru <br />
          09:00 - 18:00 (UTC +5)<br />
          454012, г. Челябинск, Копейское шоссе, д.23 <br />
        </p>
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
    </div>
    <span class="footer-bottom"
      >*Информация, представленная на сайте, не является публичной офертой</span
    >
    <div class="top" @click="toTop">
      <img class="arrow-top" src="../assets/icon/Arrow-top.svg" />
      <span class="arrow-top-text">ВВЕРХ</span>
    </div>
  </div>
  <div class="footer-mobile">
    <div class="footer-mobile-top">
      <img class="footer-mobile-logo" src="../assets/Logo.svg" alt="" />
    </div>
    <div class="footer-mobile-menu">
      <nav class="menu-item">
        <h3 class="footer-title">КОМПАНИЯ</h3>
        <router-link class="menu-link" to="/tech">Спецтехника</router-link>
        <router-link class="menu-link" to="/leasing">Лизинг</router-link>
        <router-link class="menu-link" to="/parts">Запчасти</router-link>
        <router-link class="menu-link" to="/services"
          >Ремонт спецтехники</router-link
        >
        <router-link class="menu-link" to="/paymentAndDelivery"
          >Оплата и доставка</router-link
        >
        <router-link class="menu-link" to="/contacts">Контакты</router-link>
      </nav>
      <nav class="menu-item">
        <h3 class="footer-title">КАТАЛОГ</h3>
        <router-link
          class="menu-link"
          v-for="category of categories"
          :key="category.id"
          :to="'/tech/' + category.id"
          >{{ category.title }}</router-link
        >
      </nav>
    </div>
    <span class="footer-bottom"
      >*Информация, представленная на сайте, не является публичной офертой</span
    >
    <div class="top-mobile" @click="toTop" v-show="arrowVisible">
      <img class="arrow-top-mobile" src="../assets/icon/Arrow-top.svg" />
      <span class="arrow-top-text-mobile">ВВЕРХ</span>
    </div>
  </div>
  <contact-form v-show="contactFormVisibility" @close="closeModal" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContactForm from "./Forms/ContactForm.vue";

@Options({
  components: { ContactForm },
  data() {
    return {
      scTimer: 0,
      scY: 0,
      arrowVisible: false,
      categories: [],
      contactFormVisibility: false,
    };
  },

  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    showModal() {
      this.contactFormVisibility = true;
    },
    closeModal() {
      this.contactFormVisibility = false;
    },
  },
  mounted() {
    fetch("http://45.12.238.17:8000/api/cars-categories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.categories = data;
      });
  },
})
export default class Footer extends Vue {}
</script>
<style>
.footer {
  position: relative;
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
      cursor: pointer;
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
      cursor: pointer;
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
  .footer-bottom {
    font-size: 12px;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    padding-bottom: 12px;
    width: 100%;
  }
  .top {
    position: absolute;
    bottom: 5%;
    right: 5%;
    scroll-behavior: smooth;
    cursor: pointer;
    opacity: 0.7;

    .arrow-top-text {
      display: block;
      font-size: 10px;
      text-decoration: underline;
      color: #ffcc00;
    }
    &:hover {
      .arrow-top {
        margin-bottom: 10px;
        transition: 1s;
      }
    }
  }
}

.footer-mobile {
  display: none;
}
@media (max-width: 1899px) {
  .footer .footer-menu {
    grid-column-gap: 16px;
  }
}
@media (max-width: 1600px) {
  .footer .footer-top .catalog .catalog-link {
    font-size: 18px;
  }
  .footer .footer-top .contact .contact-link {
    font-size: 18px;
  }
  .footer .footer-top .catalog .circle {
    width: 48px;
    height: 48px;
  }
  .footer .footer-top .contact .circle {
    width: 48px;
    height: 48px;
  }
  .footer .footer-menu .menu-item .menu-link {
    font-size: 18px;
  }
  .footer .footer-menu .contact-footer .contact-footer-info {
    font-size: 18px;
  }
}
@media (max-width: 1365px) {
  .footer .footer-top .catalog {
    grid-template-columns: 1fr 0.5fr 1fr;
    display: grid;
  }
  .footer .footer-top .contact {
    grid-template-columns: 1fr 0.5fr 1fr;
    display: grid;
  }
}
@media (max-width: 1199px) {
  .footer .footer-top .catalog .arrow {
    height: 32px;
  }
  .footer .footer-top .contact .arrow {
    height: 32px;
  }
}
@media (max-width: 1000px) {
  .footer {
    padding: 32px;
  }
}
@media (max-width: 768px) {
  .footer {
    display: none;
  }
  .footer-mobile {
    display: block;
    height: 100vh;
    position: relative;
    .footer-mobile-top {
      width: 100%;

      background-color: #ffcc00;
      .footer-mobile-logo {
        height: 80px;
        display: flex;
        align-items: center;
        margin-left: 32px;
      }
    }
    .footer-mobile-menu {
      text-align: left;
      padding: 0 32px;
      .menu-item {
        .menu-link {
          display: block;
          text-decoration: none;
          text-transform: uppercase;
          color: #949494;
          margin: 12px 0;
        }
      }
    }
    .footer-bottom {
      font-size: 12px;
      position: absolute;
      bottom: 0;
      right: 50%;
      transform: translateX(50%);
      padding-bottom: 12px;
      width: 100%;
    }
    .top-mobile {
      position: fixed;
      bottom: 5%;
      right: 5%;
      scroll-behavior: smooth;
      cursor: pointer;
      opacity: 0.7;

      .arrow-top-text-mobile {
        display: block;
        font-size: 10px;
        text-decoration: underline;
        color: #ffcc00;
      }
      &:active {
        .arrow-top-mobile {
          margin-bottom: 10px;
          transition: 1s;
        }
      }
    }
  }
}
</style>
