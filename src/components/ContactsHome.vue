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
      <div class="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.441062853625!2d61.48377038174769!3d55.140076672890714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c5f2ed685e9081%3A0x469f62de13194086!2z0YPQuy4g0JXQvdC40YHQtdC50YHQutCw0Y8sIDQx0LAsINCn0LXQu9GP0LHQuNC90YHQuiwg0KfQtdC70Y_QsdC40L3RgdC60LDRjyDQvtCx0LsuLCA0NTQxMTk!5e0!3m2!1sru!2sru!4v1705936614733!5m2!1sru!2sru"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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
    gap: 16px;
    .contact-map {
      width: 90%;
    }
  }
}
@media (max-width: 1600px) {
  .contacts-home .contact-block {
    display: flex;
    flex-wrap: wrap;

    .contact-map {
      width: 50%;
      margin-left: auto;
    }
  }
}
@media (max-width: 1400px) {
  .contacts-home .contact-block {
    .contact-map {
      width: 100%;
    }
  }
}
</style>
