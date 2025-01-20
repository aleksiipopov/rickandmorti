<template>
  <div class="search">
    <input type="text" placeholder="Search by name..." v-model="searchValue" />
    <button type="button" @click="search()">Search</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    search() {
      this.$store.dispatch("setSearch", {
        name: this.searchValue,
      });
    },
  },
};
</script>
<style lang="scss">
.search {
  input,
  button {
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
