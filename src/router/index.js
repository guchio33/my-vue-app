import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Ranking from "@/components/Ranking.vue"
import Login from "@/components/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: Ranking,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
