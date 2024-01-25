<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href class="" @click="back">Назад</a>
  </div>
  <h2 class="leas-title">ОПЛАТА И ДОСТАВКА</h2>
  <div class="pay-del-cont">
    <h3 class="pay-del-title">ДОСТАВКА</h3>
    <div class="payment-and-delivery">
      <div class="tech">
        <span>Спецтехника</span>
        <p>
          ТД “Челябинские строительные машины” организует доставку спецтехники
          по всей территории России и СНГ. <br />
          Варианты доставки:
        </p>
        <ul>
          <li>
            Мы организуем доставку приобретенной у нас спецтехники
            (оборудования) силами третьих лиц. ТД “Челябинские строительные
            машины” много лет сотрудничает с проверенными транспортными
            перевозчиками, которые доставляют приобретенную у нас спецтехнику
            покупателям автомобильным транспортом, ж/д транспортом. Кроме того,
            организуем погрузку приобретенной у нас спецтехники на транспорт и
            ее увязку.
          </li>
        </ul>
      </div>

      <div class="parts">
        <span>Запчасти</span>
        <p>
          ТД “Челябинские строительные машины” выполняет доставку запчастей по
          всей территории России и СНГ. <br />
          Варианты доставки:
        </p>
        <ul>
          <li>
            1. Если запчасть (запчасти) для спецтехники не является
            крупногабаритной(не требуется индивидуальная перевозка автомобильным
            транспортом), то при заказе на сумму от 30 000 руб., но весом не
            более1 тонны, доставка заказа от склада ТД “Челябинские строительные
            машины” до транспортной компании осуществляется бесплатно. Далее по
            тарифам ТК за счет покупателя. Расчет произведем в процессе
            оформления Вами заказа.
          </li>
          <li>
            2. Если общий вес заказанных Вами запчастей превышает 1 тонну, то
            стоимость доставки запчастей до ТК будет рассчитываться по тарифам
            грузоперевозок.
          </li>
          <li>
            3. При заказе на сумму менее 30 000 руб. доставка до ТК
            осуществляется курьером транспортной компании по Вашему выбору, с
            последующей оплатой услуг курьера и услуг по доставке груза ТК.
          </li>
          <li>
            4. Самовывоз выбранной вами ТК. Для этого при оформлении заказа Вам
            необходимо указать наименование выбранной Вами ТК, город назначения
            и наши специалисты организуют отгрузку с нашего склада указанной
            Вами ТК.
          </li>
          <li>5. Самовывоз с нашего склада.</li>
        </ul>
      </div>
    </div>
    <div class="pay-del-info">
      <div class="info-title">Документы</div>
      <div class="info-text">
        Отгрузка товара осуществляется по факту поступления оплаты, при наличии
        паспорта, доверенности или печати.
      </div>
      <div class="info-title">Сроки доставки</div>
      <div class="info-text">
        Стоимость доставки запчастей складывается из стоимости услуг ТК и
        оплачивается Покупателем. Стоимость доставки спецтехники согласовывается
        покупателем с перевозчиком исходя из маршрута перевозки и перевозимого
        груза и оплачивается покупателем самостоятельно.
      </div>

      <div class="info-title">Оплата</div>
      <div class="info-text">Оплата доставки производится Покупателем.</div>
    </div>
    <button class="forms-btn pay-del-btn" @click="showModal">
      Расчитать стоимость доставки
    </button>
  </div>
  <common-calc-delivery-modal
    v-show="commonCalcDeliveryModalVisibility"
    @close="closeModal"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CommonCalcDeliveryModal from "@/components/Forms/CommonCalcDeliveryModal.vue";

@Options({
  components: { CommonCalcDeliveryModal },
  data() {
    return {
      commonCalcDeliveryModalVisibility: false,
    };
  },
  methods: {
    showModal() {
      this.commonCalcDeliveryModalVisibility = true;
    },
    closeModal() {
      this.commonCalcDeliveryModalVisibility = false;
    },
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },
})
export default class Payment extends Vue {}
</script>
<style>
.pay-del-cont {
  padding: 64px;
  text-align: left;

  .pay-del-info {
    text-align: left;

    .info-title {
      margin: 40px 0 24px;
      font-size: 24px;
      font-weight: 700;
    }
  }

  .pay-del-btn {
    margin: 0 auto;
    display: block;
    margin-top: 80px;
  }
}

@media (max-width: 1365px) {
  .pay-del-cont {
    padding: 32px 64px;
  }

  .pay-del-cont .pay-del-info .info-title {
    margin: 24px 0;
  }
}

@media (max-width: 1000px) {
  .pay-del-cont {
    padding: 32px;
  }
}

@media (max-width: 768px) {
}
</style>
