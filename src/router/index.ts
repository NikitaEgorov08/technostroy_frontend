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
import NotFound from "../views/404.vue";

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
    path: "/tech/:idCarCat",
    name: "TechCards",
    component: TechCards,
  },
  {
    path: "/tech/:idCarCat/:idCar",
    name: "TechProduct",
    component: TechProduct,
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
    path: "/parts/:idCat/:idSub/:idPart",
    name: "ComponentProduct",
    component: ComponentProduct,
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
    path: "/serviceComponents",
    name: "ServiceComponents",
    component: ServiceComponents,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
  //{
  // path: "**",
  //redirect: "/404",
  //},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  routes,
});
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    console.log(to);
    window.location.href = "https://chelstroymash.ru/404.html?from=" + to.path;
  } else {
    //eslint-disable-next-line
    const link: any = !!document.querySelector("link[rel='canonical']")
      ? document.querySelector("link[rel='canonical']")
      : document.createElement("link");
    link.setAttribute("rel", "canonical");
    //prettier-ignore
    link.setAttribute("href", location.protocol + "//" + location.host + to.path);
    document.head.appendChild(link);
    next();
  }
});
router.afterEach((to, from) => {
  const path = to.path.split("/").filter((i) => i);
  localStorage.setItem("breadcrumbs", JSON.stringify(path));
});
export default router;
