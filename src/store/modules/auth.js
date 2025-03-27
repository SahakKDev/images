import { router } from "@/main";
import api from "../../api/imgur";
import qs from "qs";

const IMGUR_TOKEN = "imgur_token";

const state = {
  token: localStorage.getItem(IMGUR_TOKEN) || null,
};

const getters = {
  isLoggedIn(state) {
    return !!state.token;
  },
};

const actions = {
  login() {
    api.login();
  },
  finilazeLogin({ commit }, hash) {
    const { access_token } = qs.parse(hash.replace("#", "")) || {};

    commit("setToken", access_token);
    localStorage.setItem(IMGUR_TOKEN, access_token);

    router.push("/");
  },
  logout({ commit }) {
    commit("setToken", null);
    localStorage.removeItem(IMGUR_TOKEN);
  },
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
