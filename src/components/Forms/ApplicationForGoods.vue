<template>
  <div
    class="application-for-goods"
    :style="{ display: visible ? 'block' : 'none' }"
  >
    <div class="form-container">
      <div class="close-container" @click="$emit('close')">
        <div class="close-hover"></div>
        <div class="close"></div>
      </div>

      <img class="background-form" src="../../assets/image/Gears.png" alt="" />
      <div class="form-info">
        <p class="goods-form-title">Заявка на группу товаров</p>

        <input
          class="goods-form-input"
          type="text"
          placeholder="Введите ваше имя*"
        />
        <input
          class="goods-form-input"
          type="text"
          placeholder="Введите ваш номер телефона*"
        />
        <input
          class="goods-form-input"
          type="text"
          placeholder="Введите ваш e-mail*"
        />

        <p class="goods-form-bottom">
          * Отправляя заявку, Вы выражаете согласие на обработку персональных
          данных и соглашаетесь с политикой конфиденциальности
        </p>
        <div class="goods-form-btn">
          <button class="btn">Отправить заявку</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: { visible: Boolean },
  data() {
    return {
      formItems: [
        {
          id: 1,
          title: "Заявка на группу товаров",
          name: "",
          checked: false,
        },
      ],
    };
  },
})
export default class ApplicationForGoods extends Vue {}
</script>
<style>
.application-for-goods {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  height: 100vh;
  .form-container {
    border: 1px solid #000;
    .close-container:hover {
      .close-hover {
        position: absolute;

        top: 16px;
        right: 16px;
        background-color: #ffcc00;
        width: 36px;
        height: 36px;
        border-radius: 10%;
        z-index: 3;
        cursor: pointer;
      }
    }

    .close:before,
    .close:after {
      content: "";
      position: absolute;

      top: 32px;
      right: 22px;
      width: 24px;
      height: 4px;
      background: #333;
      z-index: 4;
      cursor: pointer;
    }
    .close:before {
      transform: rotate(45deg);
    }
    .close:after {
      transform: rotate(-45deg);
    }

    .background-form {
      position: absolute;
      right: -56px;
      transform: scale(-1, 1);
    }
    .form-info {
      background-color: #fff;
      text-align: left;
      padding: 16px 40px;
      .goods-form-title {
        margin-bottom: 0;
        text-align: center;
        font-size: 24px;
      }

      .goods-form-input {
        display: block;
        width: 100%;
        margin-top: 2rem;
        background-color: none;
        border: none;
        border-bottom: 1px solid #000;
      }
      .goods-form-bottom {
        font-size: 14px;
        margin-top: 64px;
      }
      .goods-form-btn {
        margin-top: 64px;
        margin-bottom: 8px;
        display: flex;
        justify-content: center;
        .btn {
          color: rgba(255, 204, 0, 0.5);

          border: none;
          background-color: #949494;
          border-radius: 6px;
          padding: 8px 20px;
        }
      }
    }
  }
}
</style>
