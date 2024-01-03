<template>
  <div class="home-form">
    <div class="form-container">
      <div class="form-info">
        <p class="home-form-title">Оставьте ваши контакты</p>
        <p class="home-form-subtitle">
          и наш специалист свяжется с вами в течение 30 минут
        </p>
        <input
          class="home-form-input"
          type="text"
          placeholder="Введите ваше имя*"
        />
        <input
          class="home-form-input"
          type="text"
          placeholder="Введите ваш e-mail*"
        />
        <input
          class="home-form-input"
          type="text"
          placeholder="Введите ваш номер телефона*"
        />
        <div class="home-form-btn">
          <button class="btn">Отправить заявку</button>
        </div>
        <img class="castle" src="../../assets/icon/Castle.svg" alt="" />
        <span class="home-form-bottom"
          >Ваши данные никогда не будут переданы третьим лицам</span
        >
      </div>
    </div>
    <img class="form-img" src="../../assets/image/Home-form.png" alt="" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeForm extends Vue {}
</script>
<style>
.home-form {
  display: flex;

  .form-container {
    background-color: #d0d0d0;

    padding: 16px 40px;
    .form-info {
      height: 90%;
      background-color: #fff;
      text-align: left;
      padding: 16px 40px;
    }
    .home-form-title {
      margin-bottom: 0;
      font-size: 24px;
      line-height: 1;
    }
    .home-form-subtitle {
      font-size: 12px;
      width: 60%;
    }
    .home-form-input {
      display: block;
      width: 100%;
      margin-top: 16px;
      background-color: none;
      border: none;
      border-bottom: 1px solid #000;
    }
    .home-form-btn {
      margin-top: 14px;
      margin-bottom: 8px;
      display: flex;
      justify-content: end;
      .btn {
        color: rgba(255, 204, 0, 0.5);

        border: none;
        background-color: #949494;
        border-radius: 6px;
        padding: 8px 20px;
      }
    }

    .home-form-bottom {
      font-size: 8px;
      margin-left: 4px;
    }
  }
  .form-img {
    height: 100%;
  }
}
</style>
