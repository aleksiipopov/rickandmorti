<template>
  <div class="description">
    <div class="content">
      <h4>{{ character.name }}</h4>
      <div class="subtitle">
        {{ character.species }} - {{ character.status }}
      </div>
      <div class="location">
        Last known location:
        <a :href="character.location.url">{{ character.location.name }}</a>
      </div>
      <div class="location">
        First seen in: <a :href="character.episode[0]">episode</a>
      </div>
      <RemoveAddFavouritesButton :id="character.id" />
    </div>
    <img :src="character.image" alt="character" />
  </div>
</template>

<script>
import RemoveAddFavouritesButton from "./RemoveAddFavouritesButton";

export default {
  props: ["character"],
  components: {
    RemoveAddFavouritesButton,
  },
};
</script>
<style lang="scss">
.description {
  margin: 10px 20px;
  display: flex;
  justify-content: space-between;
  border: solid 1px #d3d3d3;
  border-radius: 5px;
  main-height: 300px;

  .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 20px;

    h4 {
      font-size: 30px;
      font-width: 600;
    }
  }

  a {
    color: black;
    font-width: 600;
  }
}
</style>
