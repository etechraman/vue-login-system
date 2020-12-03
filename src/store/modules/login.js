export default {
  state: {
    username: "",
    password: "",
    user: {},
    isLoggedIn: "",
  },
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn,
  },
  actions: {
    login({ commit }, payload) {
      commit("login", payload);
      commit("updateUsername", "");
      commit("updatePassword", "");
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  mutations: {
    login(state, data) {
      state.user = data;
      localStorage.setItem("isLoggedIn", true);
    },
    logout(state) {
      state.user = {};
      localStorage.removeItem("isLoggedIn");
    },
    updateUsername(state, val) {
      state.username = val;
    },
    updatePassword(state, val) {
      state.password = val;
    },
  },
};
