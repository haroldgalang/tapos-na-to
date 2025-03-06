import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state) {
      state.count--;
    },
  },
  actions: {
    increment({ commit }) {
      commit("INCREMENT");
    },
    decrement({ commit }) {
      commit("DECREMENT");
    },
  },
  getters: {
    getCount: (state) => state.count,
  },
});
