<template>
  <div class="get-offer-modal">
    <div class="form-container">
      <div class="close-container" @click="close">
        <div class="close-hover"></div>
        <div class="close"></div>
      </div>

      <img
        class="background-form"
        src="../../assets/image/Gears.png"
        alt=""
        v-show="!isError && !isSuccess"
      />
      <p class="form-title-success" v-show="isSuccess">Отправлено успешно</p>
      <p class="form-title-error" v-show="isError">Произошла ошибка</p>
      <div class="form-info" v-show="!isError && !isSuccess">
        <p class="form-title">
          Получить коммерческое предложение на:
          <span v-if="product_title">{{ `: ${product_title}` }}</span>
        </p>
        <span class="form-subtitle"
          >Оставьте Ваши данные, чтобы мы связались с Вами и ответили на все
          интересующие Вас вопросы</span
        >
        <input
          class="form-input"
          type="text"
          placeholder="Введите ваше имя*"
          v-model="name"
        />
        <input
          class="form-input"
          type="text"
          placeholder="Введите ваш номер телефона*"
          v-model="phone"
        />
        <input
          class="form-input"
          type="text"
          placeholder="Введите ваш e-mail*"
          v-model="email"
        />
        <input
          class="form-input"
          type="text"
          placeholder="Введите название компании"
          v-model="company_name"
        />
        <textarea
          class="form-comment"
          type="text"
          placeholder="Комментарий"
          v-model="message"
        ></textarea>

        <p class="form-bottom">
          * Отправляя заявку, Вы выражаете согласие на обработку персональных
          данных и соглашаетесь с политикой конфиденциальности
        </p>
        <div class="form-btn">
          <button class="btn" @click="sendRequest" :disabled="btnDisabled">
            {{ isLoading ? "Загрузка..." : "Заказать КП" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: { visible: Boolean, product_title: String },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      company_name: "",
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
        !this.company_name.length ||
        !this.message.length
      );
    },
  },
  methods: {
    sendRequest() {
      this.isLoading = true;
      const data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        company_name: this.company_name,
        message: this.message,
      };
      fetch("http://31.128.39.64:8000/api/requests-kp/", {
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
      this.company_name = "";
      this.message = "";
      this.isError = false;
      this.isSuccess = false;
      this.$emit("close");
    },
  },
})
export default class GetOfferModal extends Vue {}
</script>
<style>
.get-offer-modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

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
      .form-title {
        text-align: center;
        font-size: 24px;
      }

      .form-input {
        display: block;
        width: 100%;
        margin-top: 2rem;
        background-color: none;
        border: none;
        border-bottom: 1px solid #000;
      }
      .form-comment {
        display: block;
        width: 100%;
        height: 6rem;
        margin-top: 2rem;
        background-color: none;

        border: 1px solid #000;
        resize: none;
      }

      .form-bottom {
        font-size: 14px;
      }
      .form-btn {
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
    }
    .form-title-success {
      background-color: #fff;
      text-align: left;
      padding: 64px;
      color: green;
      margin: 0;
      text-align: center;
      align-items: center;
      display: flex;
    }
    .form-title-error {
      background-color: #fff;
      text-align: left;
      padding: 64px;
      color: red;
      margin: 0;
      text-align: center;
      align-items: center;
      display: flex;
    }
  }
}
@media (max-width: 1600px) {
  .get-offer-modal .form-container .form-info .form-input {
    margin-top: 1rem;
  }
}
@media (max-width: 768px) {
  .get-offer-modal {
    width: 100%;
  }
}
</style>
