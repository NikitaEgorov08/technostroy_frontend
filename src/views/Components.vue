<template>
  <div class="components">
    <div class="back">
      <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
      <a href="" class="">Назад</a>
    </div>

    <h2 class="parts-title">Запасные части к тракторам</h2>

    <div class="components-catalog">
      <ComponentCard
        img="../assets/image/Three.png"
        title="Название товара"
        text="Лишь интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. "
      />
      <ComponentCard
        img="../assets/image/Three.png"
        title="Название товара"
        text="Лишь интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. "
      />
      <ComponentCard
        img="../assets/image/Three.png"
        title="Название товара"
        text="Лишь интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. "
      />
      <ComponentCard
        img="../assets/image/Three.png"
        title="Название товара"
        text="Лишь интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. "
      />
      <ComponentCard
        img="../assets/image/Three.png"
        title="Название товара"
        text="Лишь интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. "
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ComponentCard from "@/components/ComponentCard.vue"; // @ is an alias to /src

@Options({
  components: {
    ComponentCard,
  },
})
export default class Components extends Vue {}
</script>
<style lang="scss">
.components {
  .components-catalog {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 32px;
    padding: 64px 80px;
  }
}
@media (max-width: 1199px) {
  .components .components-catalog {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 1000px) {
  .components .components-catalog {
    grid-template-columns: 1fr 1fr;
    padding: 32px;
  }
}
@media (max-width: 768px) {
  .components .components-catalog {
    display: block;
  }
}
</style>
