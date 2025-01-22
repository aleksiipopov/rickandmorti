<template>
  <div class="item">
    <img :src="item.image" alt="character" />
    <div>
      <h3>{{ item.name }}</h3>
      <h4>{{ item.species }} - {{ item.status }}</h4>
      <RemoveAddFavouritesButton :id="item.id" :handleClick="handleClick" />
    </div>
  </div>
</template>
<script>
import RemoveAddFavouritesButton from "./RemoveAddFavouritesButton";

export default {
  props: ["item", "handleClick"],
  components: {
    RemoveAddFavouritesButton,
  },
};
</script>
<style lang="scss">
.item {
  border: 1px solid #d3d3d3;
  width: 22%;
  margin-left: 2%;
  margin-bottom: 2%;

  img {
    width: 100%;
    height: auto;
  }

  div {
    padding: 20px;
    h3 {
      font-weight: 700;
    }
    h4 {
      margin: 20px 0;
      font-weight: 500;
    }
  }
}
</style>
