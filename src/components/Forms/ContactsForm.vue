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
            v-model="name"
          />

          <input
            class="contacts-form-input"
            type="text"
            placeholder="Введите ваш номер телефона*"
            v-model="phone"
          />
          <input
            class="contacts-form-input"
            type="text"
            placeholder="Введите ваш e-mail*"
            v-model="email"
          />
        </div>

        <div>
          <textarea
            class="contacts-form-input comment"
            type="text"
            placeholder="Комментарий"
            v-model="message"
          ></textarea>
        </div>
      </div>
      <div class="contacts-form-btn">
        <button class="btn" @click="sendRequest" :disabled="btnDisabled">
          {{ isLoading ? "Загрузка..." : "Отправить заявку" }}
        </button>
      </div>

      <span class="contacts-form-bottom"
        >Нажимая кнопку “Отправить данные”, Вы подтверждаете свое согласие на
        обработку персональных данных</span
      >
      <p class="form-title-success" v-show="isSuccess">Отправлено успешно</p>
      <p class="form-title-error" v-show="isError">Произошла ошибка</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      message: "",
      isError: false,
      isSuccess: false,
      isLoading: false,
    };
  },
  computed: {
    btnDisabled() {
      return (
        !this.name.length ||
        !this.phone.length ||
        !this.email.length ||
        !this.message.length
      );
    },
  },
  methods: {
    sendRequest() {
      this.isLoading = true;
      this.isSuccess = false;

      this.isError = false;
      const data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        message: this.message,
      };
      fetch("http://45.12.238.17:8000/api/requests-call/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (!response.ok) {
          this.isSuccess = false;

          this.isError = true;
          this.isLoading = false;
          this.name = "";
          this.phone = "";
          this.email = "";
          this.message = "";
        } else {
          const data = response.json();
          this.isSuccess = true;
          this.isError = false;
          this.isLoading = false;
          this.name = "";
          this.phone = "";
          this.email = "";
          this.message = "";
        }
      });
    },
  },
})
export default class ContactsForm extends Vue {}
</script>
<style>
.contacts-form {
  margin: 51px 64px;
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
      gap: 8px;
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
    }

    .contacts-form-bottom {
      font-size: 8px;
      margin-left: 4px;
      color: rgba(0, 0, 0, 0.5);
    }
    .form-title-success {
      color: green;
      text-align: center;
      margin: 0;
      margin-top: 1rem;
    }
    .form-title-error {
      color: red;
      text-align: center;
      margin: 0;
      margin-top: 1rem;
    }
  }
}
@media (max-width: 1199px) {
  .contacts-form .form-container {
    padding: 24px;
  }
}
</style>
