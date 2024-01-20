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
    path: "/",
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
    path: "/parts/:id",
    name: "SubParts",
    component: SubParts,
  },
  {
    path: "/parts/:idCat/:idSub",
    name: "Components",
    component: Components,
  },
  {
    path: "/services",
    name: "ServiceCatalog",
    component: ServiceCatalog,
  },
  {
    path: "/services/:id",
    name: "Service",
    component: Service,
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
    path: "/componentProduct",
    name: "ComponentProduct",
    component: ComponentProduct,
  },
  {
    path: "/serviceComponents",
    name: "ServiceComponents",
    component: ServiceComponents,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  routes,
});

export default router;
