<template>
  <div class="subHeader">
    <FilterBlock />
    <SearchBlock />
  </div>
</template>

<script>
import FilterBlock from "./FilterBlock";
import SearchBlock from "./SearchBlock";

export default {
  components: {
    FilterBlock,
    SearchBlock,
  },
};
</script>

<style lang="scss">
.subHeader {
  width: 100%;
  padding: 20px 70px;
  box-sizing: border-box;
  background-color: #e8e8e8;
  display: flex;
}
</style>
