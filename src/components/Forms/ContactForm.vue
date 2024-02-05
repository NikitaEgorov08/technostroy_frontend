<template>
  <div class="contact-form">
    <div class="form-container">
      <div class="close-container" @click="close">
        <div class="close-hover"></div>
        <div class="close"></div>
      </div>
      <p class="form-title-success" v-show="isSuccess">Отправлено успешно</p>
      <p class="form-title-error" v-show="isError">Произошла ошибка</p>
      <div class="form-info" v-show="!isError && !isSuccess">
        <p class="contact-form-title">Оставьте ваши контакты</p>
        <p class="contact-form-subtitle">
          и наш специалист свяжется с вами в течение 30 минут
        </p>
        <input
          class="contact-form-input"
          type="text"
          placeholder="Введите ваше имя*"
          v-model="name"
        />

        <input
          class="contact-form-input"
          type="text"
          placeholder="Введите ваш номер телефона*"
          v-model="phone"
        />
        <input
          class="contact-form-input"
          type="text"
          placeholder="Введите ваш e-mail*"
          v-model="email"
        />
        <div class="contact-form-btn">
          <button class="btn" @click="sendRequest" :disabled="btnDisabled">
            {{ isLoading ? "Загрузка..." : "Отправить заявку" }}
          </button>
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
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      isError: false,
      isSuccess: false,
      isLoading: false,
    };
  },
  computed: {
    btnDisabled() {
      return !this.name.length || !this.phone.length || !this.email.length;
    },
  },
  methods: {
    sendRequest() {
      this.isLoading = true;
      const data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      fetch("http://45.12.238.17:8000/api/requests-call/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (!response.ok) {
          this.isError = true;
          this.isLoading = false;
        } else {
          const data = response.json();
          this.isSuccess = true;
          this.isLoading = false;
        }
      });
    },
    close() {
      this.name = "";
      this.phone = "";
      this.email = "";
      this.isError = false;
      this.isSuccess = false;
      this.$emit("close");
    },
  },
})
export default class ContactForm extends Vue {}
</script>
<style>
.contact-form {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
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

    .contact-form-bottom {
      font-size: 14px;

      margin-left: 4px;
    }
    .form-title-success {
      background-color: #fff;
      text-align: left;
      padding: 64px;
      color: green;
      margin: 0;
      text-align: center;
      align-items: center;
    }
    .form-title-error {
      background-color: #fff;
      text-align: left;
      padding: 64px;
      color: red;
      margin: 0;
      text-align: center;
      align-items: center;
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
