import { createStore } from "vuex";

export default createStore({
  state: {
    frutas: [
      { nombre: "Manzana", cantidad: 0 },
      { nombre: "Pera", cantidad: 0 },
      { nombre: "Naranja", cantidad: 0 },
    ],
  },
  getters: {
    mensaje(state) {
      return state.msg;
    },
    nombreCompleto(state) {
      return `${state.nombre} ${state.apellido}`;
    },
    mostrarFutas(state) {
      return state.frutas.sort((a, b) => b.cantidad - a.cantidad);
    },
  },
  mutations: {
    aumentar(state, index) {
      state.frutas[index].cantidad++;
    },
    reiniciar(state) {
      state.frutas.forEach((elemento) => {
        elemento.cantidad = 0;
      });
    },
  },
  actions: {
    aumentarCantidad(context, index) {
      context.commit("aumentar", index);
    },
    reiniciarcontador(context) {
      context.commit("reiniciar");
    },
  },
  modules: {},
});
