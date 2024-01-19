<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href="" class="">Назад</a>
  </div>
  <h2 class="leas-title">Ремонт узлов и агрегатов</h2>
  <div class="service">
    <div class="service-img">
      <img class="" src="../assets/image/ServiceTechn1.png" alt="" />
      <img class="" src="../assets/image/ServiceTechn2.png" alt="" />
      <img class="" src="../assets/image/ServiceTechn3.png" alt="" />
    </div>
    <div class="service-text">
      Также как новая модель организационной деятельности способствует
      подготовке и реализации глубокомысленных рассуждений. Учитывая ключевые
      сценарии поведения, понимание сути ресурсосберегающих технологий играет
      важную роль в формировании модели развития. Повседневная практика
      показывает, что укрепление и развитие внутренней структуры позволяет
      оценить значение приоретизации разума над эмоциями. Предварительные выводы
      неутешительны: начало повседневной работы по формированию позиции является
      качественно новой ступенью поэтапного и последовательного развития
      общества. Противоположная точка зрения подразумевает, что диаграммы связей
      представляют собой не что иное, как квинтэссенцию победы маркетинга над
      разумом и должны быть подвергнуты целой серии независимых исследований.
      Банальные, но неопровержимые выводы, а также представители современных
      социальных резервов, инициированные исключительно синтетически,
      рассмотрены исключительно в разрезе маркетинговых и финансовых
      предпосылок. Являясь всего лишь частью общей картины, явные признаки
      победы институционализации и по сей день остаются уделом либералов,
      которые жаждут быть превращены в посмешище, хотя само их существование
      приносит несомненную пользу обществу. С другой стороны, существующая
      теория не оставляет шанса для своевременного выполнения сверхзадачи. Как
      принято считать, стремящиеся вытеснить традиционное производство,
      нанотехнологии и по сей день остаются уделом либералов, которые жаждут
      быть ассоциативно распределены по отраслям.
    </div>
    <button class="forms-btn service-btn" @click="showModal">
      Отправить заявку
    </button>
  </div>
  <repair-parts-modal v-show="repairPartsModalVisibility" @close="closeModal" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RepairPartsModal from "@/components/Forms/RepairPartsModal.vue";

@Options({
  components: { RepairPartsModal },
  data() {
    return {
      repairPartsModalVisibility: false,
    };
  },
  methods: {
    showModal() {
      this.repairPartsModalVisibility = true;
    },
    closeModal() {
      this.repairPartsModalVisibility = false;
    },
  },
})
export default class ServiceComponents extends Vue {}
</script>
<style lang="scss">
.service {
  padding: 64px;

  .service-img {
    display: flex;
    justify-content: space-between;
  }

  .service-text {
    text-align: left;
    padding: 80px 0;
  }

  .service-btn {
    margin-left: auto;
  }
}
@media (max-width: 1000px) {
  .service {
    padding: 32px;
  }
}
</style>
