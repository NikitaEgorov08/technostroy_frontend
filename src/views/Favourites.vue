<template>
  <h2>ИЗБРАННОЕ</h2>
  <div class="favourites">
    <a class="select-all" href="">Удалить все</a>

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
      <button class="application-favorites" @click="showModalGroupFavorites">
        Отправить заявку
      </button>
      <button class="forms-btn">Купить в лизинг</button>
      <a class="delite-btn" href="">Удалить выбранное</a>
    </div>
  </div>
  <request-group-favorites-modal
    v-show="groupFavoritesModalVisibility"
    @close="closeModalGroupFavorites"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RequestGroupFavoritesModal from "@/components/Forms/RequestGroupFavoritesModal.vue";
import Tractor from "../assets/image/Tractor.png";
import Bulldozer from "../assets/image/Bulldozer.png";

@Options({
  components: { RequestGroupFavoritesModal },
  data() {
    return {
      groupFavoritesModalVisibility: false,
      cartItems: [
        {
          id: 1,
          title: "Трактор МВР-1570",
          image: Tractor,
          checked: false,
        },
        {
          id: 2,
          title: "Бульдозер",
          image: Bulldozer,
          checked: false,
        },
      ],
    };
  },
  methods: {
    showModalGroupFavorites() {
      this.groupFavoritesModalVisibility = true;
    },

    closeModalGroupFavorites() {
      this.groupFavoritesModalVisibility = false;
    },
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
    text-decoration: none;
    color: #fb0404;
    margin-right: 64px;
  }
  .favourite-card {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 36px 64px;
    border-bottom: 1px solid #fc0;
    align-items: center;
    .favourite-card-img {
      text-align: left;

      width: 200px;
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
    }
  }
}
</style>
