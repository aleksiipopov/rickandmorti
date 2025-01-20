<template>
  <div class="list">
    <div class="wrapper" v-if="items && items.length > 0">
      <ItemBlock
        v-for="item in items"
        :key="item.id"
        :item="item"
        @click="pickCharacter(item)"
        :handleClick="handleClick"
      />
    </div>
    <h3 v-else>No cards</h3>
  </div>
</template>
<script>
import ItemBlock from "./ItemBlock";

export default {
  props: ["items", "handleClick"],
  components: {
    ItemBlock,
  },
  methods: {
    pickCharacter(character) {
      this.$store.dispatch("setActiveCharacter", { ...character });
    },
  },
};
</script>
<style lang="scss">
.list {
  padding: 20px 30px;
  box-sizing: border-box;
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
