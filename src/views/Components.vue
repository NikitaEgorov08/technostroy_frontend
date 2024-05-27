<template>
  <div class="components">
    <div class="back">
      <div>
        <span v-for="(item, idx) of breadcrumbs" :key="item.id">
          <router-link :to="item.link">{{ item.title }}</router-link>
          <span style="padding: 0 8px" v-if="idx + 1 !== breadcrumbs.length"
            >/</span
          >
        </span>
      </div>
    </div>

    <h2 class="parts-title">{{ headline }}</h2>

    <div class="components-catalog" v-if="parts.length">
      <ComponentCard
        v-for="part of parts"
        :key="part.id"
        :url="
          '/parts/' +
          $route.params.idCat +
          '/' +
          $route.params.idSub +
          '/' +
          part.id
        "
        :img="part.image"
        :title="part.title"
        :text="part.description"
        :inStock="part.in_stock"
        :compatibility="part.compatibility"
        :article_number="part.article_number"
      />
    </div>
    <h3 v-else>К сожалению, в данной категории нет товаров</h3>
    <div class="catalog-bottom">
      <div class="catalog-bottom-title">
        Если вы не нашли интересующую вас запчасть, оставьте свои контакты и мы
        свяжемся с вами для уточнения наличия детали на складе.
      </div>
      <button class="forms-btn" @click="showModal">Отправить заявку</button>
    </div>
  </div>
  <contact-form v-show="contactFormVisibility" @close="closeModal" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ComponentCard from "@/components/ComponentCard.vue";
import ContactForm from "../components/Forms/ContactForm.vue";

@Options({
  components: {
    ComponentCard,
    ContactForm,
  },
  data() {
    return {
      contactFormVisibility: false,
      parts: [],
      subcategoryTitle: "",
      categoryTitle: "",
      breadcrumbs: [],
    };
  },
  methods: {
    back(e: Event) {
      e.preventDefault();
      this.$router.back();
    },
    showModal() {
      this.contactFormVisibility = true;
    },
    closeModal() {
      this.contactFormVisibility = false;
    },
  },
  computed: {
    headline() {
      return this.categoryTitle.replace("Запчасти", this.subcategoryTitle);
    },
  },
  mounted() {
    const idCat = this.$route.params.idCat;
    const idSub = this.$route.params.idSub;
    fetch(
      `http://31.128.39.64:8000/api/parts?category=${idCat}&subcategory=${idSub}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.parts = data;
      });
    fetch("http://31.128.39.64:8000/api/parts-categories/" + idCat)
      .then((res) => res.json())
      .then((data) => (this.categoryTitle = data.title));
    fetch("http://31.128.39.64:8000/api/parts-subcategories/" + idSub)
      .then((res) => res.json())
      .then((data) => (this.subcategoryTitle = data.title));
    fetch("http://31.128.39.64:8000/api/parts-categories/" + idCat)
      .then((res) => res.json())
      .then((data) => {
        fetch("http://31.128.39.64:8000/api/parts-subcategories/" + idSub)
          .then((res) => res.json())
          .then((cat) => {
            this.breadcrumbs = [
              { id: 0, title: "Каталог", link: `/parts/` },
              { id: data.id, title: data.title, link: `/parts/${idCat}` },
              {
                id: cat.id,
                title: cat.title,
                link: `/parts/${idCat}/${idSub}`,
              },
            ];
          });
      });
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
  .catalog-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 64px;

    .catalog-bottom-title {
      color: #000;
      margin-right: 5%;
      font-size: 18px;

      font-weight: 700;
      text-transform: uppercase;
    }
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
  .components .catalog-bottom {
    display: block;
    padding: 32px;
  }
  .components .catalog-bottom .catalog-bottom-title {
    margin: 24px 0;
    text-align: left;
  }
}
</style>
