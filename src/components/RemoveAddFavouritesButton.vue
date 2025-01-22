<template>
  <button
    v-if="isFavoutire"
    class="button remove"
    @click.stop.prevent="removeFavourites(id)"
  >
    Remove from Favourites
  </button>
  <button v-else class="button" @click.stop.prevent="addToFavourites(id)">
    Add to Favourites
  </button>
</template>

<script>
export default {
  props: ["id", "handleClick"],
  data() {
    return {
      isFavoutire: false,
    };
  },
  methods: {
    checkIsFavourite() {
      const arrayOfFavourites = JSON.parse(localStorage.getItem("favourites"));
      this.isFavoutire = arrayOfFavourites.includes(this.id);
    },
    addToFavourites(id) {
      const arrayOfFavourites = JSON.parse(localStorage.getItem("favourites"));
      if (!arrayOfFavourites) {
        localStorage.setItem("favourites", JSON.stringify([id]));
        this.isFavoutire = true;
        this.$store.dispatch("setListOfFavourites");
      }
      if (arrayOfFavourites && !arrayOfFavourites.includes(id)) {
        localStorage.setItem(
          "favourites",
          JSON.stringify([...arrayOfFavourites, id])
        );
        this.$store.dispatch("setListOfFavourites");
        this.isFavoutire = true;
      }
    },
    removeFavourites(id) {
      const arrayOfFavourites = JSON.parse(localStorage.getItem("favourites"));
      if (typeof this.handleClick === "function") {
        this.handleClick();
      }
      if (arrayOfFavourites && arrayOfFavourites.includes(id)) {
        arrayOfFavourites.splice(arrayOfFavourites.indexOf(id), 1);
        localStorage.setItem("favourites", JSON.stringify(arrayOfFavourites));
        this.$store.dispatch("setListOfFavourites");

        this.isFavoutire = false;
      }
    },
  },
  mounted() {
    this.checkIsFavourite();
  },
};
</script>

<style lang="scss">
.button {
  width: max-content;
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: none;
  font-size: 14px;
  margin-right: auto;

  &.remove {
    background: #d3d3d3;
  }
}
</style>
