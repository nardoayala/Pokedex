import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import PokemonDetails from "@/views/PokemonDetails";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/:id",
      name: "pokemon-details",
      component: PokemonDetails
    },
    {
      path: "*",
      name: "Error",
      component: Error
    }
  ]
});
