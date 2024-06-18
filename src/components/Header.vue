<template>
  <div class="header">
    <div class="header-cont">
      <a class="header-mail" href="mailto:info@chelstroymash.ru"
        >info@chelstroymash.ru</a
      >
      <a target="_blank" href="https://t.me/+79193519559"
        ><img src="../assets/icon/Telegram.svg" alt=""
      /></a>
      <a target="_blank" href="https://wa.me/79193519559"
        ><img src="../assets/icon/Whatsapp.svg" alt=""
      /></a>

      <img src="../assets/icon/Tel.svg" alt="" />

      <a target="_blank" href="tel:+79193519559">+7 (919) 351-95-59</a>
    </div>
    <div class="header-info">
      <router-link to="/"
        ><img class="logo" src="../assets/Logo.svg" alt=""
      /></router-link>

      <span class="logo-title"
        >ТОРГОВЫЙ ДОМ <br />
        ЧЕЛЯБИНСКИЕ СТРОИТЕЛЬНЫЕ МАШИНЫ</span
      >
      <div class="search">
        <input
          class="search-bar"
          type="text"
          placeholder="Поиск"
          @input="search"
          v-model="searchStr"
        />

        <img class="search-icon" src="../assets/icon/Search.svg" alt="" />
        <div class="search-result" v-if="searched.length">
          <div
            class="search-result-item"
            v-for="item of searched"
            :key="item.id"
          >
            <router-link
              :to="constructLink(item)"
              @click="
                searched = [];
                searchStr = '';
              "
            >
              {{ item.title }}</router-link
            >
          </div>
        </div>
      </div>
      <router-link to="/Favourites">
        <img class="favourites-icon" src="../assets/icon/Cart.svg" alt=""
      /></router-link>

      <button class="request" @click="showModal">Заказать звонок</button>

      <div
        class="hamburger-menu"
        :class="{ close: mobileMenuVisibility }"
        @click="mobileMenu"
      >
        <div class="hamburger one"></div>
        <div class="hamburger two"></div>
        <div class="hamburger three"></div>
      </div>
    </div>

    <nav class="menu-item">
      <router-link to="/catalog" class="menu-link">СПЕЦТЕХНИКА</router-link>
      <router-link to="/leasing" class="menu-link">ЛИЗИНГ</router-link>
      <router-link to="/parts" class="menu-link">ЗАПЧАСТИ</router-link>
      <router-link to="/services" class="menu-link"
        >РЕМОНТ СПЕЦТЕХНИКИ</router-link
      >
      <router-link to="/about" class="menu-link">О КОМПАНИИ</router-link>
      <router-link to="/paymentAndDelivery" class="menu-link"
        >ОПЛАТА И ДОСТАВКА</router-link
      >
      <router-link to="/favourites" class="menu-link">ИЗБРАННОЕ</router-link>
      <router-link to="/contacts" class="menu-link">КОНТАКТЫ</router-link>
    </nav>
  </div>

  <img
    class="header-modal-mobile"
    src="../assets/icon/Hero-modal-mobile.svg"
    @click="showModal"
    alt=""
  />
  <contact-form v-show="contactFormVisibility" @close="closeModal" />
  <mobile-menu v-show="mobileMenuVisibility" @close="closeMobileMenu" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContactForm from "./Forms/ContactForm.vue";
import MobileMenu from "./Forms/MobileMenu.vue";

@Options({
  components: { ContactForm, MobileMenu },
  props: {
    msg: String,
  },
  data() {
    return {
      contactFormVisibility: false,
      listIsVisible: false,
      mobileMenuVisibility: false,
      parts: [],
      tech: [],
      searched: [],
      searchStr: "",
    };
  },
  computed: {
    allProducts() {
      return [...this.tech, ...this.parts];
    },
  },
  methods: {
    showModal() {
      this.contactFormVisibility = true;
    },
    closeModal() {
      this.contactFormVisibility = false;
    },
    openMobileMenu() {
      this.mobileMenuVisibility = true;
    },
    closeMobileMenu() {
      this.mobileMenuVisibility = false;
    },
    mobileMenu() {
      if (this.mobileMenuVisibility) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    },
    search(e: any) {
      const value = e.target.value;
      if (!value.length) {
        this.searched = [];
        return;
      }
      const searched = this.allProducts.filter(
        (item: any) =>
          item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      this.searched = searched;
    },
    constructLink(item: any) {
      return `/${item.type}/${
        item.category_id ? item.category_id : item.category
      }/${item.subcategory_id ? item.subcategory_id : item.id}${
        item.subcategory_id ? "/" + item.id : ""
      }`;
    },
  },
  mounted() {
    fetch("https://chelstroymash.ru/api/parts/")
      .then((res) => res.json())
      .then(
        (data) =>
          (this.parts = data.map((item: any) => ({ ...item, type: "parts" })))
      );
    fetch("https://chelstroymash.ru/api/cars/")
      .then((res) => res.json())
      .then(
        (data) =>
          (this.tech = data.map((item: any) => ({ ...item, type: "tech" })))
      );
  },
})
export default class Header extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  .header-cont {
    background-color: #333;
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      color: #ffcc00;
      text-decoration: none;
      margin-right: 16px;
      display: flex;
      align-items: center;
    }

    img {
      margin-right: 16px;
    }
  }

  .header-info {
    position: relative;
    background-color: #ffcc00;
    width: 100%;
    padding: 12px 0;
    display: grid;
    grid-template-columns: 0.5fr 1fr 2fr 0.5fr 1fr;
    grid-column-gap: 16px;
    align-items: center;

    .logo {
      position: absolute;
      top: 50%;
      left: 24px;
      transform: translateY(-50%);
    }
    .logo-title {
      margin: 0 auto;
      color: #000;

      font-size: 18px;

      font-weight: 800;
    }
    .search {
      position: relative;
      display: flex;
      align-items: center;

      .search-bar {
        width: 625px;
        height: 40px;
        border-radius: 20px;
        background-color: rgba(51, 51, 51, 0.25);
        border: none;
        padding-left: 16px;
        margin-right: 16px;
      }

      .search-result {
        position: absolute;
        top: 100%;
        margin-top: 16px;
        left: 0;
        background-color: #fff;
        padding: 16px;
        z-index: 999;
        text-align: left;
        border-radius: 16px;
        width: 100%;
      }
    }
    .request {
      border-radius: 6px;
      opacity: 0.9;
      background-color: #333;
      border: none;
      padding: 10px 20px;
      max-width: 200px;
      color: #ffcc00;
      margin-right: 64px;

      cursor: pointer;
      &:hover {
        background-color: #222;
      }
      &:active {
        background-color: #000;
      }
    }
  }

  .menu-item {
    display: flex;
    justify-content: space-around;
    background-color: #333;
    padding: 24px 0;
    display: flex;
    align-items: center;
    .menu-link {
      color: #ffcc00;
      text-decoration: none;
      font-size: 24px;
    }
    .menu-link:hover {
      //font-weight: 700;
      text-decoration: underline;
    }

    .menu-link:focus {
      font-weight: 700;
      text-decoration: underline;
    }
  }
}
.header-modal-mobile {
  display: none;
}

@media (max-width: 1899px) {
  .header .header-info .logo-title {
  }
  .header .header-info .search .search-bar {
  }
}
@media (max-width: 1600px) {
  .header .header-info {
    grid-template-columns: 0.5fr 1fr 2fr 0.3fr 1fr;
  }
  .header .header-info .search .search-bar {
    width: 400px;
  }

  .header .header-info .request {
    margin-right: 24px;
  }
  .header .header-info .logo-title {
    font-size: 12px;
  }

  .header .menu-item {
    padding: 12px 0;
  }
  .header .menu-item .menu-link {
    font-size: 16px;
  }
  .header .header-info .logo {
    height: 86px;
  }
}
@media (max-width: 1199px) {
  .header .header-info .search .search-bar {
    width: 320px;
    height: 32px;
  }
  .header .header-info .search .search-icon {
    height: 24px;
  }
  .header .header-info .favourites-icon {
    display: flex;
    height: 24px;
  }
  .header .menu-item .menu-link {
    font-size: 14px;
  }
}
@media (max-width: 1000px) {
  .header .header-info {
    padding: 6px 0;
    gap: 4px;
  }
  .header .header-info .search .search-bar {
    width: 200px;
  }
  .header .header-info .logo-title {
    font-size: 23px;
  }
  .header .header-info .logo-title {
    font-size: 8px;
  }
  .header .header-info .logo {
    height: 56px;
  }
  .header .header-info .request {
    font-size: 12px;
    padding: 8px 12px;
  }
  .header .menu-item .menu-link {
    font-size: 10px;
  }
}
@media (max-width: 700px) {
  .header .header-info .logo-title {
    display: none;
  }
  .header .header-info .request {
    display: none;
  }
  .header .header-info .favourites-icon {
    display: none;
  }
  .header .header-info {
    display: grid;
    grid-template-columns: 1fr 1fr 0fr 1fr;
    gap: 8px;
  }
}
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .header .header-cont .header-mail {
    display: none;
  }
  .header .menu-item .menu-link {
    display: none;
  }

  .header .header-info .logo {
    z-index: 4;
    left: 2%;
  }
  .header {
    .header-info {
      .hamburger-menu {
        display: block;
        margin: 0 auto;
        .hamburger {
          width: 30px;
          height: 3px;
          background-color: white;
          margin: 5px;
          background-color: #333;
        }
      }
      .close {
        .one {
          position: absolute;
          transform: rotate(45deg);
        }
        .two {
          position: relative;
          transform: rotate(-45deg);
        }
        .three {
          display: none;
        }
      }
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
  .header-modal-mobile {
    display: block;
    position: fixed;
    right: 5%;
    top: 25%;
    z-index: 2;
  }
}
@media (max-width: 480px) {
  .header .header-info .search .search-bar {
    width: 148px;
  }
  .header .header-info .logo {
    left: 1%;
  }
}
</style>
