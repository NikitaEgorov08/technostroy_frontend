<template>
  <div class="contacts-home">
    <h2 class="home-title">КОНТАКТЫ и РЕКВИЗИТЫ</h2>
    <div class="contact-block">
      <div class="contact-info">
        <ContactCard
          name="ООО “Торговый Дом “Челябинские строительные машины”
            
            "
          jurInfo="

ИНН 7449076417 
ОГРН 1087449002783"
          jurAdd="Юридический адрес: Россия, 454078, г.Челябинск, ул. Барбюса, 75-66 
          
           "
          officeAdd="Адрес офиса: Россия, г. Челябинск, ул. Енисейская, 41А "
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

      <HomeForm />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeForm from "@/components/Forms/HomeForm.vue"; // @ is an alias to /src
import ContactCard from "@/components/ContactCard.vue"; // @ is an alias to /src

@Options({
  components: {
    HomeForm,
    ContactCard,
  },
})
export default class ContactsHome extends Vue {}
</script>
<style>
.contacts-home {
  padding: 0 92px;
  .contact-block {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
  }
  .contact-map {
    width: 100%;
  }
}
@media (max-width: 1600px) {
  .contacts-home .contact-block {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
