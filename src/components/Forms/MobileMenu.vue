<template>
  <div class="mobile-menu">
    <ul class="mobile-menu-list">
      <li class="mobile-menu-item">
        <router-link to="/tech" class="menu-link" @click="$emit('close')"
          >СПЕЦТЕХНИКА</router-link
        >
      </li>
      <li class="mobile-menu-item" @click="$emit('close')">
        <router-link to="/leasing" class="menu-link">ЛИЗИНГ</router-link>
      </li>
      <li class="mobile-menu-item" @click="$emit('close')">
        <router-link to="/parts" class="menu-link">ЗАПЧАСТИ</router-link>
      </li>
      <li class="mobile-menu-item" @click="$emit('close')">
        <router-link to="/ServiceCatalog" class="menu-link"
          >РЕМОНТ СПЕЦТЕХНИКИ</router-link
        >
      </li>
      <li class="mobile-menu-item" @click="$emit('close')">
        <router-link to="/about" class="menu-link">О КОМПАНИИ</router-link>
      </li>
      <li class="mobile-menu-item" @click="$emit('close')">
        <router-link to="/paymentAndDelivery" class="menu-link"
          >ОПЛАТА И ДОСТАВКА</router-link
        >
      </li>
      <li class="mobile-menu-item" @click="$emit('close')">
        <router-link to="/favourites" class="menu-link">ИЗБРАННОЕ</router-link>
      </li>
      <li class="mobile-menu-item" @click="$emit('close')">
        <router-link to="/contacts" class="menu-link">КОНТАКТЫ</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
})
export default class MobileMenu extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mobile-menu {
  margin-top: -24px;

  .mobile-menu-list {
    display: grid;
    gap: 2px;
    padding: 0;
    margin: 0;
    background: #ffcc00;
    list-style-type: none;

    transition: 0.3s;
    width: 100%;
    height: 100vh;
    z-index: 1;
  }
  .mobile-menu-item {
    display: block;
    padding: 8px;

    text-decoration: none;
    display: flex;
    justify-content: space-around;
    background-color: #333;
    padding: 24px 0;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #ffcc00;
      color: #333;
      .menu-link {
        color: #333;
      }
    }
    .menu-link {
      color: #ffcc00;
      text-decoration: none;
      font-size: 16px;
    }

    .menu-link:focus {
      font-weight: 700;
      text-decoration: underline;
    }
  }
}
</style>
