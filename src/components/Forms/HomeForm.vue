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
          v-model="name"
        />

        <input
          class="home-form-input"
          type="text"
          placeholder="Введите ваш номер телефона*"
          v-model="phone"
        />
        <input
          class="home-form-input"
          type="text"
          placeholder="Введите ваш e-mail*"
          v-model="email"
        />
        <div class="home-form-btn">
          <button class="btn" @click="sendRequest" :disabled="btnDisabled">
            {{ isLoading ? "Загрузка..." : "Отправить заявку" }}
          </button>
        </div>
        <img class="castle" src="../../assets/icon/Castle.svg" alt="" />
        <span class="home-form-bottom"
          >Ваши данные никогда не будут переданы третьим лицам</span
        >
        <p class="form-title-success" v-show="isSuccess">Отправлено успешно</p>
        <p class="form-title-error" v-show="isError">Произошла ошибка</p>
      </div>
    </div>
    <img class="form-img" src="../../assets/image/Home-form.png" alt="" />
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
      this.isSuccess = false;

      this.isError = false;
      const data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      fetch("https://chelstroymash.ru/api/requests-call/", {
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
        } else {
          const data = response.json();
          this.isSuccess = true;
          this.isError = false;
          this.isLoading = false;
          this.name = "";
          this.phone = "";
          this.email = "";
        }
      });
    },
  },
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

    .home-form-bottom {
      font-size: 8px;
      margin-left: 4px;
    }
    .form-title-success {
      color: green;
      text-align: center;
      margin-top: 2rem;
    }
    .form-title-error {
      color: red;
      text-align: center;
      margin-top: 2rem;
    }
  }

  .form-img {
    height: 100%;
  }
}
@media (max-width: 1899px) {
  .home-form {
    width: 100%;
  }
  .home-form .form-container {
    padding: 16px 24px;
    width: 80%;
  }
  .home-form .form-img {
    height: 100%;
    width: 40%;
  }
}
@media (max-width: 1600px) {
  .home-form {
    margin: 24px auto;
  }
}
@media (max-width: 768px) {
  .home-form {
    width: 100%;
  }
  .home-form .form-img {
    display: none;
  }
  .home-form .form-container {
    width: 100%;
  }
}
</style>
