import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import images from "./modules/images";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    images,
  },
});

export default store;
