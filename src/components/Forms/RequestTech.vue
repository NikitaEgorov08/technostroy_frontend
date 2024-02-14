<template>
  <div class="repair-price-modal">
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
        <p class="form-title">Оставить заявку на: {{ product_title }}</p>
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
        <div>
          <input
            type="checkbox"
            class="custom-checkbox"
            id="delivery"
            name="delivery"
            v-model="is_delivery"
          />
          <label for="delivery">Требуется расчет доставки</label>
        </div>
        <input
          v-if="is_delivery"
          class="form-input"
          type="text"
          placeholder="Введите адрес доставки"
          v-model="address"
        />
        <div v-if="type !== 'part'">
          <input
            type="checkbox"
            class="custom-checkbox"
            id="commercial"
            name="commercial"
            v-model="is_commercial"
          />
          <label for="commercial">Требуется коммерческое предложение</label>
        </div>
        <input
          v-if="is_commercial"
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
            {{ isLoading ? "Загрузка..." : "Отправить заявку" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["product_title", "type"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      message: "",
      address: "",
      company_name: "",
      is_delivery: false,
      is_commercial: false,
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
      const data: any = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        message: this.message,
        product_name: this.product_title,
        is_delivery: this.is_delivery,
        is_commercial: this.is_commercial,
        address: this.address,
        company_name: this.company_name,
      };
      if (this.type === "tech") {
        fetch("http://45.12.238.17:8000/api/requests-tech/", {
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
      } else if (this.type === "part") {
        fetch("http://45.12.238.17:8000/api/requests-parts/", {
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
      }
    },
    close() {
      this.name = "";
      this.phone = "";
      this.email = "";
      this.message = "";
      this.is_devlivery = true;
      this.isError = false;
      this.isSuccess = false;
      this.$emit("close");
    },
  },
})
export default class RequestTech extends Vue {}
</script>

<style scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: flex;
  align-items: center;
  user-select: none;
  text-align: end;
  margin-top: 24px;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #000;
  margin-right: 12px;
  background-repeat: no-repeat;
  background-position: center center;
}
.custom-checkbox:checked + label::before {
  background-image: url("../../assets/icon/Check.svg");
}
</style>
