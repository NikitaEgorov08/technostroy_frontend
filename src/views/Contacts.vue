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
          :name="ooo"
          :jurAdd="address"
          :jurInfo="`ИНН ${inn} ОГРН ${ogrn}`"
          :officeAdd="address"
          :tel1="phone_1"
          :tel2="phone_2"
          :mail="email"
        />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2281.4047781018407!2d61.48963227634786!3d55.12369244027149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c5f2e122d684d7%3A0x244ab64c6ca1a35c!2z0JrQvtC_0LXQudGB0LrQvtC1INGILiwgMjMsINCn0LXQu9GP0LHQuNC90YHQuiwg0KfQtdC70Y_QsdC40L3RgdC60LDRjyDQvtCx0LsuLCA0NTQwMTI!5e0!3m2!1sru!2sru!4v1707054268170!5m2!1sru!2sru"
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
  data() {
    return {
      phone_1: "",
      phone_2: "",
      inn: "",
      ogrn: "",
      email: "",
      address: "",
      ooo: "",
    };
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
  },
  mounted() {
    fetch("http://45.12.238.17:8000/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        data = data[0];
        this.phone_1 = data.phone_1;
        this.phone_2 = data.phone_2;
        this.inn = data.inn;
        this.ogrn = data.ogrn;
        this.email = data.email;
        this.address = data.address;
        this.ooo = data.ooo;
      });
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
