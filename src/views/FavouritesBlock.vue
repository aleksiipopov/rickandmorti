<template>
  <ListOfItems :items="items" :handleClick="changeCountOfFavorites" />
</template>
<script>
import ListOfItems from "../components/ListOfItems.vue";

export default {
  props: ["items"],
  components: {
    ListOfItems,
  },
  async mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>
<style lang="scss"></style>
