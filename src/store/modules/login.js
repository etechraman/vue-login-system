export default {
  state: {
    username: "",
    password: "",
    user: {},
    isLoggedIn: false,
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
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("isLoggedIn", state.isLoggedIn);
    },
    logout(state) {
      state.user = {};
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
    },
    updateUsername(state, val) {
      state.username = val;
    },
    updatePassword(state, val) {
      state.password = val;
    },
    updateIsLoggedIn(state, val) {
      state.isLoggedIn = val;
    },
  },
};
