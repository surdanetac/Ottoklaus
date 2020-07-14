import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productostable: [],
  },
  mutations: {
    setItemsState(state, productos) {
      state.productostable = productos;
    },
  },
  actions: {
    setItems({ commit }, productos) {
      commit("setItemsState", productos);
    },
  },
  modules: {},
});
