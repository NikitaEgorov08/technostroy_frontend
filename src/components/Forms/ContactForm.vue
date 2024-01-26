<template>
  <div class="contact-form">
    <div class="form-container">
      <div class="close-container" @click="$emit('close')">
        <div class="close-hover"></div>
        <div class="close"></div>
      </div>
      <div class="form-info">
        <p class="contact-form-title">Оставьте ваши контакты</p>
        <p class="contact-form-subtitle">
          и наш специалист свяжется с вами в течение 30 минут
        </p>
        <input
          class="contact-form-input"
          type="text"
          placeholder="Введите ваше имя*"
        />
        <input
          class="contact-form-input"
          type="text"
          placeholder="Введите ваш e-mail*"
        />
        <input
          class="contact-form-input"
          type="text"
          placeholder="Введите ваш номер телефона*"
        />
        <div class="contact-form-btn">
          <button class="btn">Отправить заявку</button>
        </div>
        <img class="castle" src="../../assets/icon/Castle.svg" alt="" />
        <span class="contact-form-bottom"
          >Ваши данные никогда не будут переданы третьим лицам</span
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class ContactForm extends Vue {}
</script>
<style>
.contact-form {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 40%;

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
    .form-info {
      background-color: #fff;
      text-align: left;
      padding: 16px 40px;
    }
    .contact-form-title {
      margin-bottom: 0;
      text-align: center;
      font-size: 24px;
    }
    .contact-form-subtitle {
      font-size: 12px;
      text-align: center;
    }
    .contact-form-input {
      display: block;
      width: 100%;
      margin-top: 2rem;
      background-color: none;
      border: none;
      border-bottom: 1px solid #000;
    }
    .contact-form-btn {
      margin-top: 2rem;
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

    .contact-form-bottom {
      font-size: 14px;

      margin-left: 4px;
    }
  }
}

@media (max-width: 1600px) {
  .contact-form {
    margin: 24px auto;
  }
}
@media (max-width: 768px) {
  .contact-form {
    width: 100%;
  }
}
</style>
