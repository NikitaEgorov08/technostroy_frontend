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
          ТЕХНОСТРОЙ выполняет доставку товаров по всей территории России.
          <br />
          Варианты доставки:
        </p>
        <ul>
          <li>
            ТК «Деловые линии» при сумме заказа от 30 000 рублей с одного склада
            или при сумме сборного заказа от 50 000 рублей с разных складов,
            доставка осуществляется БЕСПЛАТНО до ближайшего к клиенту терминала
            ТК «Деловые линии». (Бесплатная доставка не распространяется на
            категории товаров «Ковши» и «Цепи», а также на доставку в города
            Норильск, Якутск, Петропавловск-Камчатский, Магадан и
            Южно-Сахалинск);
          </li>
          <li>курьером по указанному вами адресу (ТК «СДЭК»);</li>
          <li>
            самовывоз другой транспортной компанией. Для этого при оформлении
            заказа вам необходимо указать наименование транспортной компании,
            город назначения и наши специалисты организуют отгрузку с нашего
            склада указанной вами транспортной компанией;
          </li>
          <li>
            самовывоз с нашего склада. Услуга самовывоза товаров доступна на
            всех складах. Адреса и время работы складов указаны на сайте в
            разделе «Контакты».
          </li>
        </ul>
      </div>

      <div class="parts">
        <span>Спецтехника</span>
        <p>
          ТЕХНОСТРОЙ выполняет доставку товаров по всей территории России.
          <br />
          Варианты доставки:
        </p>
        <ul>
          <li>
            ТК «Деловые линии» при сумме заказа от 30 000 рублей с одного склада
            или при сумме сборного заказа от 50 000 рублей с разных складов,
            доставка осуществляется БЕСПЛАТНО до ближайшего к клиенту терминала
            ТК «Деловые линии». (Бесплатная доставка не распространяется на
            категории товаров «Ковши» и «Цепи», а также на доставку в города
            Норильск, Якутск, Петропавловск-Камчатский, Магадан и
            Южно-Сахалинск);
          </li>
          <li>курьером по указанному вами адресу (ТК «СДЭК»);</li>
          <li>
            самовывоз другой транспортной компанией. Для этого при оформлении
            заказа вам необходимо указать наименование транспортной компании,
            город назначения и наши специалисты организуют отгрузку с нашего
            склада указанной вами транспортной компанией;
          </li>
          <li>
            самовывоз с нашего склада. Услуга самовывоза товаров доступна на
            всех складах. Адреса и время работы складов указаны на сайте в
            разделе «Контакты».
          </li>
        </ul>
      </div>
    </div>
    <div class="pay-del-info">
      <div class="info-title">Документы</div>
      <div class="info-text">
        Отгрузка товара осуществляется по факту поступления оплаты (если иное не
        предусмотрено статусом клиента в соответствии с системой лояльности),
        при наличии паспорта, доверенности или печати.
      </div>
      <div class="info-title">Сроки доставки</div>
      <div class="info-text">
        Ориентировочные сроки доставки указаны на странице оформлении заказа
        (при выборе доставки ТК «Деловые линии»). Отследить поступление заказа
        можно на сайте перевозчика по трековому номеру, указанному в личном
        кабинете.
      </div>
      <div class="info-title">Стоимость доставки</div>
      <div class="info-text">
        Указывается при оформлении заказа и отдельной строкой в счете.
      </div>
      <div class="info-title">Оплата</div>
      <div class="info-text">
        Осуществляется при выборе ТК «Деловые линии» на странице оформления
        заказа до ближайшего к Покупателю терминала транспортной компании при
        сумме заказа от 30 000 рублей с одного склада.<br />
        ВАЖНО: бесплатная доставка не распространяется на следующие категории
        товаров «Ковши», «Цепи», а также на доставку в города Норильск, Якутск,
        Петропавловск-Камчатский, Магадан и Южно-Сахалинск.
      </div>
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

  .pay-del-title {
  }

  .payment-and-delivery {
    display: grid;
    grid-template-columns: 1fr 1fr;

    grid-column-gap: 120px;
  }

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

  .pay-del-cont .payment-and-delivery {
    grid-column-gap: 32px;
  }
}

@media (max-width: 768px) {
  .pay-del-cont .payment-and-delivery {
    display: block;
  }
}
</style>
