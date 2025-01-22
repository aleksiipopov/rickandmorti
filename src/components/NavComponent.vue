<template>
  <div>
    <span
      :class="{ link: true, active: getCurrentPage !== 'favourites' }"
      @click="setPage('characters')"
    >
      Characters
    </span>
    <span
      :class="{ link: true, active: getCurrentPage === 'favourites' }"
      @click="setPage('favourites')"
    >
      Favourites
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    setPage(nameOfPage) {
      this.$store.dispatch("changeBlock", nameOfPage);
      if (nameOfPage === "favourites") {
        this.$store.dispatch("setClearFilters");
      }
    },
  },
  computed: mapGetters(["getCurrentPage"]),
};
</script>

<style lang="scss">
div {
  .link {
    margin-left: 10px;
    text-decoration: none;
    color: #808080;
    cursor: pointer;
  }
  .active {
    color: #ffffff;
  }
}
</style>
