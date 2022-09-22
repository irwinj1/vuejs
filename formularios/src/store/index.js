import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataTables: [],
    formsData: [
      {
        name: "Datos Pesonales",
        decription: "Creado para utilizarlo en el registro de personas",
        title: "Datos Pesonales",
        dateCre: "25-05-2022",
        active: true,
        acciones: "1%",
      },
      {
        name: "Inicio de sesion",
        decription: "Formato general de inicio de sesion",
        title: "Inicio de sesion",
        dateCre: "25-05-2022",
        active: false,
        acciones: "1%",
      },
    ],
  },
  getters: {},
  mutations: {
    getData(state) {
      state.dataTables = state.formsData;
    },

    filterData(state, search) {
      state.dataTables = state.formsData.filter((item) =>
        item.name.toLowerCase().includes(search)
      );
    },
  },
  actions: {
    getData({ commit }) {
      commit("getData");
    },
    filterData({ commit }, data) {
      commit("filterData", data);
    },
  },
  modules: {},
});
