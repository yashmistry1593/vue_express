import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Elastic from "../views/Elastic.vue";
import Profile from "../views/Profile.vue";
import missing from "../views/404.vue";
import Info from "../views/Info.vue";
import Contact from "../views/Contact.vue";
import Todo from "../views/Todo.vue";
import TodoDyanmo from "../views/TodoDynamo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/elastic",
    name: "Elastic",
    component: Elastic,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/todoDynamo",
    name: "TodoDynamo",
    component: TodoDyanmo,
  },
  {
    path: "/profile",
    name: "ProfileMain",
    component: Profile,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
    children: [
      {
        path: "info",
        name: "Info",
        component: Info,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    name: "404",
    component: missing,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
