<template>
  <div class="contacts-form">
    <div class="form-container">
      <div class="contacts-form-title">
        У вас есть деловой запрос? Давайте обсудим!
      </div>
      <p class="contacts-form-subtitle">
        Оставьте свои контакты, мы свяжемся с вами в ближайшее время.
      </p>
      <div class="form-info">
        <div>
          <input
            class="contacts-form-input"
            type="text"
            placeholder="Введите ваше имя*"
          />
          <input
            class="contacts-form-input"
            type="text"
            placeholder="Введите ваш e-mail*"
          />
          <input
            class="contacts-form-input"
            type="text"
            placeholder="Введите ваш номер телефона*"
          />
        </div>

        <div>
          <textarea
            class="contacts-form-input comment"
            type="text"
            placeholder="Комментарий"
          ></textarea>
        </div>
      </div>
      <div class="contacts-form-btn">
        <button class="request-btn">Отправить заявку</button>
      </div>

      <span class="contacts-form-bottom"
        >Нажимая кнопку “Отправить данные”, Вы подтверждаете свое согласие на
        обработку персональных данных</span
      >
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class ContactsForm extends Vue {}
</script>
<style>
.contacts-form {
  margin: 51px 151px;
  .form-container {
    background-color: #d0d0d0;

    padding: 56px 116px;
    .contacts-form-title {
      color: #000;

      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .form-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .contacts-form-title {
      margin-bottom: 0;
      font-size: 24px;
      line-height: 1;
      text-align: left;
    }
    .contacts-form-subtitle {
      font-size: 12px;
      text-align: left;
    }
    .contacts-form-input {
      display: block;
      width: 90%;
      margin-top: 16px;
      background-color: none;
      border: none;
      padding: 16px;
      border-radius: 6px;
    }
    .comment {
      height: calc(100% - 46px);
      resize: none;
    }

    .contacts-form-btn {
      margin-top: 48px;
      margin-bottom: 16px;
    }

    .contacts-form-bottom {
      font-size: 8px;
      margin-left: 4px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
