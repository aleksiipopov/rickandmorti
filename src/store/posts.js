const BASE_URL = "https://rickandmortyapi.com/api/character";

export default {
  state: {
    infoPagination: {},
    filters: {
      name: "",
      species: "",
    },
    listOfFavourites: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    getPaginationInfo(state) {
      let currentPage;
      if (state.infoPagination.prev) {
        const arrayOfPrev = state.infoPagination.prev.split("page=");
        const page = arrayOfPrev[arrayOfPrev.length - 1].includes("&")
          ? arrayOfPrev[arrayOfPrev.length - 1].split("&")[0]
          : arrayOfPrev[arrayOfPrev.length - 1];
        currentPage = Number(page) + 1;
      } else {
        currentPage = 1;
      }
      const updatedInfo = {
        ...state.infoPagination,
        currentPage,
      };
      return updatedInfo;
    },
    getCurrentFilter(state) {
      return state.currentFilter;
    },
    getCountFavourites(state) {
      return state.listOfFavourites.length;
    },
    getListFavourites(state) {
      return state.posts.filter((card) =>
        state.listOfFavourites.includes(card.id)
      );
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    updateInfoPagination(state, pagination) {
      state.infoPagination = pagination;
    },
    updateListOfFavourites(state, list) {
      state.listOfFavourites = list;
    },
  },
  actions: {
    async fetchPosts(ctx) {
      const res = await fetch(BASE_URL);
      const posts = await res.json();
      if (posts.info) {
        ctx.commit("updatePosts", posts.results);
        ctx.commit("updateInfoPagination", posts.info);
      } else {
        ctx.commit("updatePosts", posts);
      }
    },
    async changePage(ctx, { url }) {
      const res = await fetch(url);
      const posts = await res.json();
      if (posts.info) {
        ctx.commit("updatePosts", posts.results);
        ctx.commit("updateInfoPagination", posts.info);
      } else {
        ctx.commit("updatePosts", posts);
      }
    },
    async setFilters(ctx, { species }) {
      let urlWithFilters = BASE_URL;
      if (species) {
        ctx.state.filters.species = species;
      } else {
        ctx.state.filters.species = "";
      }
      if (ctx.state.filters.name && ctx.state.filters.species) {
        urlWithFilters =
          urlWithFilters +
          `/?name=${ctx.state.filters.name}` +
          `&species=${ctx.state.filters.species}`;
      }
      if (ctx.state.filters.name && !ctx.state.filters.species) {
        urlWithFilters = urlWithFilters + `/?name=${ctx.state.filters.name}`;
      }
      if (!ctx.state.filters.name && ctx.state.filters.species) {
        urlWithFilters =
          urlWithFilters + `/?species=${ctx.state.filters.species}`;
      }
      const res = await fetch(urlWithFilters);
      const posts = await res.json();
      if (posts.info) {
        ctx.commit("updatePosts", posts.results);
        ctx.commit("updateInfoPagination", posts.info);
      } else {
        ctx.commit("updatePosts", posts);
      }
    },
    async setSearch(ctx, { name }) {
      let urlWithFilters = BASE_URL;
      if (name) {
        ctx.state.filters.name = name;
      } else {
        ctx.state.filters.name = "";
      }
      if (!!ctx.state.filters.name && !!ctx.state.filters.species) {
        urlWithFilters =
          urlWithFilters +
          `/?name=${ctx.state.filters.name}` +
          `&species=${ctx.state.filters.species}`;
      }
      if (ctx.state.filters.name && !ctx.state.filters.species) {
        urlWithFilters = urlWithFilters + `/?name=${ctx.state.filters.name}`;
      }
      if (!ctx.state.filters.name && ctx.state.filters.species) {
        urlWithFilters =
          urlWithFilters + `/?species=${ctx.state.filters.species}`;
      }
      const res = await fetch(urlWithFilters);
      const posts = await res.json();
      if (posts.info) {
        ctx.commit("updatePosts", posts.results);
        ctx.commit("updateInfoPagination", posts.info);
      } else {
        ctx.commit("updatePosts", posts);
      }
    },
    setListOfFavourites(ctx) {
      const favourtiesList = JSON.parse(localStorage.getItem("favourites"));
      ctx.commit("updateListOfFavourites", favourtiesList);
    },
    setClearFilters(ctx) {
      ctx.state.filters.name = "";
      ctx.state.filters.species = "";
    },
  },
};
