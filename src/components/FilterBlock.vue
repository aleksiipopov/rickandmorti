<template>
  <div class="filter">
    <fieldset id="buttonsGroup">
      <input
        type="radio"
        name="buttonsGroup"
        checked
        id="buttonAll"
        @click="setFilter()"
      />
      <label for="buttonAll"> All </label>
      <input
        type="radio"
        name="buttonsGroup"
        id="buttonHuman"
        @click="setFilter('human')"
      />
      <label for="buttonHuman"> Human </label>
      <input
        type="radio"
        name="buttonsGroup"
        id="buttonAnimal"
        @click="setFilter('animal')"
      />
      <label for="buttonAnimal"> Animal </label>
      <input
        type="radio"
        name="buttonsGroup"
        id="buttonAlien"
        @click="setFilter('alien')"
      />
      <label for="buttonAlien"> Alien </label>
    </fieldset>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getPaginationInfo"]),
  methods: {
    setFilter(filterValue = "") {
      this.$store.dispatch("setFilters", {
        species: filterValue,
      });
    },
  },
};
</script>

<style lang="scss">
.filter {
  margin-right: 30px;
  box-sizing: border-box;
  input {
    display: none;

    &:checked + label {
      background-color: #000;
      color: #fff;
    }
  }

  label {
    padding: 5px 10px;
    border: 1px solid #000;
    box-sizing: border-box;
    border-right: none;
  }
  fieldset {
    display: flex;
    align-items: center;
    label:last-child {
      border-right: 1px solid #000;
    }
  }
}
</style>
