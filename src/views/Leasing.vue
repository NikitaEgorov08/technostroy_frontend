<template>
  <div class="leasing">
    <div class="back">
      <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
      <a href class="" @click="back">Назад</a>
    </div>
    <h2 class="leas-title">Лизинг</h2>
    <div class="leas-info">
      <div class="leas-info-left" v-html="text"></div>
      <!--        <div class="info-left-title">Что это такое?</div>
        <div class="info-left-text">
          Лизинг – финансовая услуга, цель которой - упрощение приобретения
          спецтехники для расширения или модернизации действующего парка.<br />
          По сути, лизинг - это аренда с последующим выкупом.
        </div>

        <div class="info-left-title">Как это работает?</div>
        <div class="info-left-text">
          Лизинговая компания приобретает нужную вам спецтехнику и передает Вам
          на срок действия договора лизинга. По завершению срока лизинга
          имущество переходит в Вашу собственность.
        </div>

        <div class="info-left-title">Какие преимущества лизинга для Вас?</div>
        <div class="info-left-text">
          Лизинг – это просто. Для оформления лизинга не требуются
          поручительства и залоги. Достаточно предоставить стандартные
          бухгалтерские документы, которые у Вас уже есть.
        </div>
        <div class="info-left-text">
          Лизинг – это быстро. От момента обращения до оплаты поставщику
          проходит 3-5 дней. Рассмотрение и одобрение заявки в течение 1-го
          рабочего дня.
        </div>
        <div class="info-left-text">
          Лизинг – это удобно. Вы запускаете в работу нужную спецтехнику, внеся
          авансовый платёж. Остальную сумму выплачиваете в течение действия
          договора лизинга. Графики платежей подбираются индивидуально для Вас:
          убывающие, равные или сезонные.
        </div>
        <div class="info-left-text">
          Лизинг – это недорого и выгодно. Вы законно уменьшаете налог на
          прибыль и возмещаете НДС постепенно, а не разово, что позволит
          избежать излишнего внимания налоговой инспекции.
        </div>

        <h3>Условия лизинга спецтехники:</h3>
        <ul class="info-left-text">
          <li>аванс от 10% до 49% стоимости спецтехники;</li>
          <li>срок лизинга от 1 года до 5 лет;</li>
          <li>2 документа для принятия решения о финансировании.</li>
        </ul>-->
      <!--
      </div>
-->

      <div class="leas-info-right">
        <img class="leas-logo" src="../assets/icon/trans-leas.svg" alt="" />
        <div class="info-right-text">
          Лизинг – это быстро. От момента обращения до оплаты поставщику
          проходит 3-5 дней. Рассмотрение и одобрение заявки в течение 1-го
          рабочего дня.
        </div>
        <div class="info-right-text">
          Лизинг – это удобно. Вы запускаете в работу нужную спецтехнику, внеся
          авансовый платёж. Остальную сумму выплачиваете в течение действия
          договора лизинга. Графики платежей подбираются индивидуально для Вас:
          убывающие, равные или сезонные.
        </div>
        <div class="info-right-text">
          Лизинг – это недорого и выгодно. Вы законно уменьшаете налог на
          прибыль и возмещаете НДС постепенно, а не разово, что позволит
          избежать излишнего внимания налоговой инспекции.
        </div>
        <div class="info-right-title">
          Наши преимущества для лизингополучателей:
        </div>
        <ul class="info-right-text">
          <li>Гибкий подход и скорость не на словах, а на деле;</li>
          <li>Финансируем предметы лизинга, которые другие не могут;</li>
          <li>Договоры без звездочек и не 6-м шрифтом на 40 страниц;</li>
          <li>Минимальный пакет документов для предварительного одобрения;</li>

          <li>
            Экономим время и бумагу - подписываем договоры в электронном виде;
          </li>

          <li>
            Страхуем по минимальным тарифам, выбирая из 7 проверенных
            страховщиков;
          </li>

          <li>Работаем со всеми регионами России;</li>
          <li>Не меняем условия по действующим договорам лизинга.</li>
        </ul>
      </div>
    </div>
    <div class="leas-chart">
      <div class="leas-chart-title">схема лизинговой сделки</div>
      <div class="leas-chart-block">
        <div class="leas-chart-item">
          <div class="item-circle">1</div>
          <div class="item-text">Выбираете нужную Вам спецтехнику</div>
        </div>
        <hr />
        <div class="leas-chart-item">
          <div class="item-circle">2</div>
          <div class="item-text">Отправляете заявку на лизинг</div>
        </div>
        <hr />
        <div class="leas-chart-item">
          <div class="item-circle">3</div>
          <div class="item-text">
            Получаете персональный расчет и даже не один
          </div>
        </div>
        <hr />
        <div class="leas-chart-item">
          <div class="item-circle">4</div>
          <div class="item-text">
            Выбираете удобный Вам размер аванса, срок и график платежей
          </div>
        </div>
        <hr />
        <div class="leas-chart-item">
          <div class="item-circle">5</div>
          <div class="item-text">Заключаете договор лизинга</div>
        </div>
        <hr />
        <div class="leas-chart-item">
          <div class="item-circle">6</div>
          <div class="item-text">
            Получаете спецтехнику где и когда Вам удобно, а все оформление
            проходит дистанционно
          </div>
        </div>
      </div>
    </div>
    <div class="leas-bottom">
      <div class="leas-bottom-title">
        Остались сомнения? Предварительно рассчитать легко!
      </div>
      <button class="forms-btn" @click="showModalLeasing">
        Отправить заявку на лизинг
      </button>
    </div>
  </div>
  <leasing-request-modal
    v-show="leasingRequestModalVisibility"
    @close="closeModalLeasing"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LeasingRequestModal from "@/components/Forms/LeasingRequestModal.vue";

@Options({
  components: { LeasingRequestModal },
  data() {
    return {
      leasingRequestModalVisibility: false,
      text: "",
    };
  },
  methods: {
    showModalLeasing() {
      this.leasingRequestModalVisibility = true;
    },
    closeModalLeasing() {
      this.leasingRequestModalVisibility = false;
    },
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },
  mounted() {
    fetch("http://31.128.39.64:8000/api/leasing")
      .then((res) => res.json())
      .then((data) => (this.text = data[0].text));
  },
})
export default class Leasing extends Vue {}
</script>
<style lang="scss">
.leasing {
  .leas-info {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 64px 64px 80px;

    .leas-info-left {
      text-align: left;
      font-size: 18px;
      margin-right: 82px;

      .info-left-title {
        font-weight: 700;
        margin-bottom: 16px;
      }

      .info-left-text {
        margin-bottom: 32px;
      }
    }

    .leas-info-right {
      background-color: #d9d9d9;
      padding: 98px 28px;
      text-align: left;

      .leas-logo {
        margin-left: 50%;
        margin-bottom: 72px;
      }

      .info-right-text {
        margin-bottom: 32px;
      }

      .info-right-title {
        font-weight: 700;
        margin-bottom: 16px;
      }
    }
  }

  .leas-chart {
    padding: 0 120px;

    .leas-chart-title {
      color: #000;
      text-align: left;
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .leas-chart-block {
      display: flex;
      justify-content: space-around;
      padding: 82px 0;

      .leas-chart-item {
        padding: 24px;

        .item-circle {
          color: #000;

          font-size: 24px;
          height: 8px;
          align-items: center;
          /* line-height: 0; */
          padding: 56px;
          width: 8px;
          /* margin: 0; */
          display: flex;
          /* padding: 0; */
          justify-content: center;
          border: 1px solid #ffcc00;
          border-radius: 50%;
          margin: 0 auto;
        }

        .item-text {
          display: flex;
          color: #000;
          padding: 16px;
          background: #d9d9d9;
          margin-top: 32px;
          height: 180px;
          width: 120px;
          text-align: center;
          align-items: center;
          font-size: 18px;
        }
      }

      hr {
        border: none;
        border-top: 1px dashed #000;

        width: 10%;
        margin-top: 82px;
      }
    }
  }

  .leas-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 120px;

    .leas-bottom-title {
      color: #000;

      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}

@media (max-width: 1600px) {
  .leasing .leas-info .leas-info-right .leas-logo {
    margin-left: 40%;
    margin-bottom: 32px;
  }
  .leasing .leas-info .leas-info-right {
    padding: 28px 16px;
  }
  .leasing .leas-chart .leas-chart-block .leas-chart-item .item-text {
    font-size: 16px;
  }
}

@media (max-width: 1365px) {
  .leasing .leas-info .leas-info-right .leas-logo {
    width: 50%;
  }
  .leasing .leas-info .leas-info-left {
    margin-right: 24px;
  }
  .leasing .leas-info .leas-info-right .info-right-text {
    font-size: 14px;
  }
  .leasing .leas-bottom .leas-bottom-title {
    font-size: 24px;
    margin-right: 24px;
  }
  .leasing .leas-info {
    padding: 32px 64px 80px;
  }
  .leasing .leas-chart .leas-chart-title {
    font-size: 28px;
  }
  .leasing .leas-chart .leas-chart-block {
    display: flex;
    justify-content: space-around;
    padding: 32px 0;
  }
  .leasing .leas-chart .leas-chart-block .leas-chart-item {
    padding: 16px;
  }
  .leasing .leas-chart .leas-chart-block .leas-chart-item .item-circle {
    font-size: 16px;

    padding: 40px;
  }
  .leasing .leas-chart .leas-chart-block hr {
    margin-top: 62px;
  }
  .leasing .leas-chart .leas-chart-block .leas-chart-item .item-text {
    margin-top: 32px;
    height: 120px;
    width: 80px;

    font-size: 12px;
  }
}

@media (max-width: 1000px) {
  .leasing .leas-info {
    padding: 32px;
  }
  .leasing .leas-chart .leas-chart-block .leas-chart-item .item-circle {
    font-size: 14px;
    padding: 24px;
  }
  .leasing .leas-chart .leas-chart-block .leas-chart-item .item-text {
    height: 120px;
    width: 56px;

    font-size: 8px;
  }
  .leasing .leas-bottom {
    padding: 32px;
  }
}

@media (max-width: 768px) {
  .leasing .leas-info {
    display: block;
  }
  .leasing .leas-chart {
    padding: 0 32px;
  }
  .leasing .leas-chart .leas-chart-block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .leasing .leas-chart .leas-chart-block hr {
    display: none;
  }
  .leasing .leas-chart .leas-chart-block .leas-chart-item {
    margin: 0 auto;
  }
  .leasing .leas-chart .leas-chart-block .leas-chart-item .item-text {
    height: 120px;
    width: auto;
    font-size: 12px;
  }
  .leasing .leas-bottom {
    display: block;
  }
  .leasing .leas-bottom .leas-bottom-title {
    margin: 24px 0;
    text-align: left;
  }
}
</style>
