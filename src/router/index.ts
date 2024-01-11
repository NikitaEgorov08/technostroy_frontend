import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Tech from "../views/Tech.vue";
import Parts from "../views/Parts.vue";
import Leasing from "../views/Leasing.vue";
import ServiceCatalog from "../views/ServiceCatalog.vue";
import About from "../views/About.vue";
import Favourites from "../views/Favourites.vue";
import Contacts from "../views/Contacts.vue";
import PaymentAndDelivery from "../views/PaymentAndDelivery.vue";
import TechCards from "../views/TechCards.vue";
import TechProduct from "@/views/TechProduct.vue";
import SubParts from "../views/SubParts.vue";
import Components from "../views/Components.vue";
import ComponentProduct from "../views/ComponentProduct.vue";
import Service from "../views/Service.vue";
import ServiceComponents from "../views/ServiceComponents.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/tech",
    name: "Tech",
    component: Tech,
  },
  {
    path: "/leasing",
    name: "Leasing",
    component: Leasing,
  },
  {
    path: "/parts",
    name: "Parts",
    component: Parts,
  },
  {
    path: "/serviceCatalog",
    name: "ServiceCatalog",
    component: ServiceCatalog,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/paymentAndDelivery",
    name: "PaymentAndDelivery",
    component: PaymentAndDelivery,
  },
  {
    path: "/techCards",
    name: "TechCards",
    component: TechCards,
  },
  {
    path: "/techProduct",
    name: "TechProduct",
    component: TechProduct,
  },
  {
    path: "/subParts",
    name: "SubParts",
    component: SubParts,
  },
  {
    path: "/components",
    name: "Components",
    component: Components,
  },
  {
    path: "/componentProduct",
    name: "ComponentProduct",
    component: ComponentProduct,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/serviceComponents",
    name: "ServiceComponents",
    component: ServiceComponents,
  },

  /* {
    path: "/Tech",
    name: "Tech",
    route level code-splitting
    this generates a separate chunk (about.[hash].js) for this route
     which is lazy-loaded when the route is visited.
    component: () =>
      import(webpackChunkName: "Tech"  "../views/Tech.vue"),
  }, */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
