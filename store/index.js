import Vuex from "vuex";
new Vuex.Store({
  namespaced: true,
  state: () => ({
    token: "",
    team: "",
    user: ""
  })
});
