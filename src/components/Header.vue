<template>
  <div class="header">
    <div class="header-cont">
      <a href="">info@technostroy.ru</a>

      <img src="../assets/icon/Telegram.svg" alt="" />
      <img src="../assets/icon/Whatsapp.svg" alt="" />
      <img src="../assets/icon/Vk.svg" alt="" />
      <img src="../assets/icon/Tel.svg" alt="" />

      <a href="">+7 123 456 7890</a>
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
        <input class="search-bar" type="text" placeholder="Поиск" />

        <img src="../assets/icon/Search.svg" alt="" />
      </div>
      <router-link to="/Favourites">
        <img src="../assets/icon/Cart.svg" alt=""
      /></router-link>

      <button class="request" @click="showModal">Отправить заявку</button>
    </div>

    <nav class="menu-item">
      <router-link to="/tech" class="menu-link">СПЕЦТЕХНИКА</router-link>
      <router-link to="/leasing" class="menu-link">ЛИЗИНГ</router-link>
      <router-link to="/parts" class="menu-link">ЗАПЧАСТИ</router-link>
      <router-link to="/ServiceCatalog" class="menu-link"
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
  <application-for-goods v-show="cartModalVisibility" @close="closeModal" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ApplicationForGoods from "./Forms/ApplicationForGoods.vue";

@Options({
  components: { ApplicationForGoods },
  props: {
    msg: String,
  },
  data() {
    return {
      cartModalVisibility: false,
    };
  },
  methods: {
    showModal() {
      this.cartModalVisibility = true;
    },
    closeModal() {
      this.cartModalVisibility = false;
    },
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
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      color: #ffcc00;
      text-decoration: none;
      margin-right: 16px;
    }

    img {
      margin-right: 16px;
    }
  }

  .header-info {
    position: relative;

    background-color: #ffcc00;
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: end;
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
      display: flex;
      align-items: center;
      margin-right: 64px;

      .search-bar {
        width: 625px;
        height: 40px;
        border-radius: 20px;
        background-color: rgba(51, 51, 51, 0.25);
        border: none;
        padding-left: 16px;
        margin-right: 16px;
      }
    }
    .request {
      border-radius: 6px;
      opacity: 0.9;
      background-color: #333;
      border: none;
      padding: 10px 20px;
      color: #ffcc00;
      margin-right: 64px;
      margin-left: 18px;

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
    height: 80px;
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
</style>
