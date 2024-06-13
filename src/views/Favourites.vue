<template>
  <h1 class="leas-title">ИЗБРАННОЕ</h1>
  <div class="favourites">
    <a class="select-all" @click="deleteAll">Удалить все</a>

    <div class="favourite-card" v-for="item of cartItems" :key="item.id">
      <img class="favourite-card-img" :src="item.image" alt="" />

      <div class="favourite-card-title">{{ item.title }}</div>
      <input
        type="checkbox"
        class="custom-checkbox"
        :id="item.id"
        :name="item.id"
        v-model="item.checked"
      />
      <label :for="item.id"></label>
      <!-- <label for=""
        ><input
          type="checkbox"
          class="custom-checkbox"
          id="happy"
          name="happy"
          value="yes"
          :checked="item.checked"
      /></label> -->

      <!-- <div class="favourite-card-checked">{{ item.checked }}</div> -->
    </div>
    <div class="favourites-buttons">
      <button
        class="application-favorites btn"
        @click="showModalGroupFavorites"
        :disabled="!cartItems.length"
      >
        Отправить заявку
      </button>
      <button
        class="forms-btn btn"
        @click="showModalLeasing"
        :disabled="
          !cartItems.length ||
          !cartItems.filter((i) => i.type === 'tech').length
        "
      >
        Купить в лизинг
      </button>
      <a class="delite-btn" @click="deleteChecked()">Удалить выбранное</a>
    </div>
  </div>
  <request-group-favorites-modal
    v-show="groupFavoritesModalVisibility"
    @close="closeModalGroupFavorites"
  />
  <leasing-request-modal
    :many="true"
    v-show="leasingRequestModalVisibility"
    @close="closeModalLeasing"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RequestGroupFavoritesModal from "@/components/Forms/RequestGroupFavoritesModal.vue";
import LeasingRequestModal from "@/components/Forms/LeasingRequestModal.vue";

import Tractor from "../assets/image/Tractor.png";
import Bulldozer from "../assets/image/Bulldozer.png";

@Options({
  components: { RequestGroupFavoritesModal, LeasingRequestModal },
  data() {
    return {
      groupFavoritesModalVisibility: false,
      leasingRequestModalVisibility: false,
      cartItems: [],
    };
  },
  methods: {
    showModalGroupFavorites() {
      this.groupFavoritesModalVisibility = true;
    },
    closeModalGroupFavorites(sended: boolean) {
      this.groupFavoritesModalVisibility = false;
      if (sended) {
        this.cartItems = [];
      }
    },
    showModalLeasing() {
      this.leasingRequestModalVisibility = true;
    },
    closeModalLeasing() {
      this.leasingRequestModalVisibility = false;
    },
    deleteAll() {
      this.cartItems = [];
      localStorage.clear();
    },
    deleteChecked() {
      const cartItems = localStorage.getItem("cart");
      if (cartItems) {
        const parsed = JSON.parse(cartItems!);

        const checkedElements = this.cartItems
          .filter((item: any) => item.checked)
          .map((item: any) => item.id);

        const newCart = parsed.filter((item: any) => {
          return !checkedElements.includes(item.id);
        });
        localStorage.setItem("cart", JSON.stringify(newCart));
        this.cartItems = newCart;
      }
    },
  },
  mounted() {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      const parsed = JSON.parse(cartItems!);
      this.cartItems = parsed;
    }
  },
  created() {
    document.title =
      'ООО Торговый Дом "Челябинские Строительные Машины" | Избранное';
  },
})
export default class Favourites extends Vue {}
</script>
<style>
.favourites {
  padding: 64px 80px;
  .select-all {
    display: flex;
    justify-content: end;
    cursor: pointer;
    text-decoration: none;
    color: #fb0404;
    margin-right: 64px;
    text-align: center;
  }
  .favourite-card {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 36px 64px;
    border-bottom: 1px solid #fc0;
    align-items: center;
    .favourite-card-img {
      text-align: left;

      height: 160px;
    }
    .favourite-card-title {
      text-align: left;
    }
    .custom-checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    .custom-checkbox + label {
      user-select: none;
      text-align: end;
    }
    .custom-checkbox + label::before {
      content: "";
      display: inline-block;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #000;

      background-repeat: no-repeat;
      background-position: center center;
    }
    .custom-checkbox:checked + label::before {
      background-image: url("../assets/icon/Check.svg");
    }
  }
  .favourites-buttons {
    display: flex;
    justify-content: end;

    gap: 80px;
    align-items: center;
    margin-top: 64px;
    margin-right: 64px;
    .delite-btn {
      color: #fb0404;
      text-decoration: none;
      font-size: 20px;
      cursor: pointer;
      transition: 1s;
      &:hover {
        transform: scale(1.2);
      }
      &:active {
        border-bottom: 1px solid #fb0404;
      }
    }
  }
}

@media (max-width: 1365px) {
  .favourites {
    padding: 32px;
  }
  .favourites .favourite-card {
    padding: 24px 32px;
    .favourite-card-img {
      height: 120px;
    }
  }
  .favourites .favourite-card {
    height: 120px;
  }

  .favourites .select-all {
    margin-right: 24px;
  }
  .favourites .favourites-buttons {
    gap: 40px;
    margin-right: 24px;
  }
}
@media (max-width: 1000px) {
  .favourites .favourite-card .favourite-card-img {
    height: 80px;
  }
}
@media (max-width: 768px) {
  .favourites .favourite-card .favourite-card-img {
    height: 56px;
  }
  .favourites .favourite-card {
    grid-template-columns: 1fr 2fr 0.5fr;
    padding: 0;
  }
  .favourites .favourites-buttons {
    flex-wrap: wrap;
  }
}
.btn {
  color: #000;

  border: none;
  background-color: #ffcc00;
  border-radius: 6px;
  padding: 8px 20px;
  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
}
.btn:disabled,
.btn[disabled] {
  color: rgba(255, 204, 0, 0.5);

  border: none;
  background-color: #949494;
  border-radius: 6px;
  padding: 8px 20px;
}
</style>
