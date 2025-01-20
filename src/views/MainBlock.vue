<template>
  <div class="home">
    <HeaderBlock />
    <FavouritesBlock
      v-if="getCurrentPage === 'favourites'"
      :items="getListFavourites"
    />
    <CharacterWithDescription
      v-else-if="
        getCurrentPage !== 'favourites' && getCurrentPage !== 'characters'
      "
      :character="getActiveCharacter"
    />
    <CharactersBlock v-else :items="allPosts" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderBlock from "./HeaderBlock";
import FavouritesBlock from "./FavouritesBlock";
import CharactersBlock from "./CharactersBlock";
import CharacterWithDescription from "../components/CharacterWithDescription";

export default {
  components: {
    HeaderBlock,
    FavouritesBlock,
    CharactersBlock,
    CharacterWithDescription,
  },
  computed: mapGetters([
    "getActiveCharacter",
    "getCurrentPage",
    "allPosts",
    "getListFavourites",
  ]),
  async mounted() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("setListOfFavourites");
  },
};
</script>
