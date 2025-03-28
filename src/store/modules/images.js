import api from "@/api/imgur";

const state = {
  images: [],
};

const getters = {
  allImages(state) {
    return state.images;
  },
};

const actions = {
  async fetchImages({ commit, rootState }) {
    const { token } = rootState.auth;
    const { data } = await api.fetchImages(token);

    commit("setImages", data.data);
  },
};

const mutations = {
  setImages(state, images) {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
