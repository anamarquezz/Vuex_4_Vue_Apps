import Vue from "vue";
import VueRouter from "vue-router";

import ShoppingList from "../views/ShoppingList.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "shoppingllist",
    component: ShoppingList
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
