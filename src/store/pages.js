export default {
  state: {
    pages: [
      {
        currentPage: "characters",
        activeCharacter: null,
      },
    ],
  },
  getters: {
    getCurrentPage: (state) => {
      return state.currentPage || "characters";
    },
    getActiveCharacter: (state) => {
      return state.activeCharacter;
    },
  },
  mutations: {
    updatePage(state, newPage) {
      state.currentPage = newPage;
    },
    updateActiveCharacter(state, character) {
      state.currentPage = character.id;
      state.activeCharacter = character;
    },
  },
  actions: {
    changeBlock(ctx, namePage = "characters") {
      ctx.commit("updatePage", namePage);
    },
    setActiveCharacter(ctx, character = null) {
      ctx.commit("updateActiveCharacter", character);
    },
  },
};
