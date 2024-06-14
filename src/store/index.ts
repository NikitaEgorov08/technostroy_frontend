import { createStore } from "vuex";

export default createStore({
  state: {
    techCategoryID: 0,
    techItemID: 0,
    partsCategoryID: 0,
    partsSubCategoryID: 0,
    partsItemID: 0,
    serviceItemID: 0,
  },
  getters: {},
  mutations: {
    SET_TECH_CATEGORY_ID: (state: any, id: number) => {
      state.techCategoryID = id;
    },
    SET_TECH_ITEM_ID: (state: any, id: number) => {
      state.techItemID = id;
    },
    SET_PARTS_CATEGORY_ID: (state: any, id: number) => {
      state.partsCategoryID = id;
    },
    SET_PARTS_SUBCATEGORY_ID: (state: any, id: number) => {
      state.partsSubCategoryID = id;
    },
    SET_PARTS_ITEM_ID: (state: any, id: number) => {
      state.partsItemID = id;
    },
    SET_SERVICES_ITEM_ID: (state: any, id: number) => {
      state.serviceItemID = id;
    },
  },
  actions: {
    setTechCategoryID: (store: any, id: number) => {
      store.commit("SET_TECH_CATEGORY_ID", id);
    },
    setTechItemID: (store: any, id: number) => {
      store.commit("SET_TECH_ITEM_ID", id);
    },
    setServiceItemID: (store: any, id: number) => {
      store.commit("SET_SERVICES_ITEM_ID", id);
    },
  },
  modules: {},
});
