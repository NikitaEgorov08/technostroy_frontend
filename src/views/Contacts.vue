<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href class="" @click="back">Назад</a>
  </div>
  <h2 class="leas-title">Контакты</h2>
  <div class="contacts-home">
    <div class="contacts-block">
      <div class="contact-info">
        <ContactCard
          name="ООО “Торговый Дом “Челябинские строительные машины”"
          jurAdd="Россия, 454012, г. Челябинск, Копейское шоссе, д.23"
          jurInfo="ИНН 7449076417 ОГРН 1087449002783"
          officeAdd="Адрес офиса: Россия, г. Челябинск, Копейское шоссе, д.23 "
          tel1="+7 (919) 351-95-59"
          tel2="+7 (919) 351-95-59"
          mail="info@chelstroymash.ru"
        />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.441062853625!2d61.48377038174769!3d55.140076672890714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c5f2ed685e9081%3A0x469f62de13194086!2z0YPQuy4g0JXQvdC40YHQtdC50YHQutCw0Y8sIDQx0LAsINCn0LXQu9GP0LHQuNC90YHQuiwg0KfQtdC70Y_QsdC40L3RgdC60LDRjyDQvtCx0LsuLCA0NTQxMTk!5e0!3m2!1sru!2sru!4v1705936614733!5m2!1sru!2sru"
        width="90%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <ContactsForm />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeForm from "@/components/Forms/HomeForm.vue"; // @ is an alias to /src
import ContactCard from "@/components/ContactCard.vue"; // @ is an alias to /src
import ContactsForm from "@/components/Forms/ContactsForm.vue";

@Options({
  components: {
    HomeForm,
    ContactCard,
    ContactsForm,
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },
})
export default class Contacts extends Vue {}
</script>
<style>
.contacts-home {
  padding: 0 64px;

  .contacts-block {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 16px;
    margin-top: 64px;
  }

  .contact-map {
    width: 100%;
  }

  .contacts-form {
    width: 100%;
  }
}

@media (max-width: 1899px) {
  .about-info {
    grid-column-gap: 120px;
  }
}

@media (max-width: 1365px) {
  .contacts-home .contacts-block {
    margin-top: 32px;
  }
}

@media (max-width: 1000px) {
  .contacts-home {
    padding: 32px;
  }
}

@media (max-width: 768px) {
  .contacts-form {
    margin: 32px;
  }

  .contacts-home .contacts-block {
    display: block;
  }

  .contacts-form .form-container .form-info {
    display: block;
  }
}
</style>
