<template>
  <div class="back">
    <img class="back-arrow" src="../assets/icon/Back-arrow.svg" alt="" />
    <a href="" class="">Назад</a>
  </div>
  <h2 class="leas-title">Контакты</h2>
  <div class="contacts-home">
    <div class="contact-block">
      <div class="contact-info">
        <ContactCard
          name="ООО “Торговый Дом “Челябинские строительные машины”
            
            "
          jurAdd="Юридический адрес: Россия, г.Уфа, 450112, ул. Льва Толстого д. 13 пом. 4 
            
             "
          jurInfo="
  
              ИНН 0274162807 
              ОГРН 1120280003117"
          officeAdd="Адрес офиса: Россия, г. Уфа 450112, ул. Льва Толстого д. 13 пом. 4 "
          tel1="8 (917) 425-59-99 "
          tel2="8 (347) 216-30-37 "
          mail="info@mail.ru "
        />
      </div>

      <div
        class="contact-map"
        ref="yandexMap"
        type="text/javascript"
        charset="utf-8"
        async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A46fc543e47755b45764179e017c7cfd387f00dd490a25e09f8cdb67738e3c95f&amp;width=636&amp;height=475&amp;lang=ru_RU&amp;scroll=true"
      ></div>
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
})
export default class Contacts extends Vue {}
</script>
<style>
.contacts-home {
  padding: 0 64px;
  .contact-block {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    margin-top: 64px;
  }
  .contact-map {
    width: 100%;
  }
  .contacts-form {
    width: 100%;
  }
}
</style>
