import { createStore } from "vuex";
import posts from "./posts";
import pages from "./pages";

export default createStore({
  modules: { posts, pages },
});
