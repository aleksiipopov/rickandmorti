<template>
  <div class="pagination">
    Page {{ getPaginationInfo.currentPage }} of {{ getPaginationInfo.pages }}
    <button
      type="button"
      :class="{ prev: true, disable: !getPaginationInfo.prev }"
      :disable="!getPaginationInfo.prev"
      @click="decrementPage()"
    >
      {{ "<< " }}Prev
    </button>
    <button
      type="button"
      :class="{ disable: !getPaginationInfo.next }"
      :disable="!getPaginationInfo.next"
      @click="incrementPage()"
    >
      Next{{ " >>" }}
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getPaginationInfo"]),
  methods: {
    incrementPage() {
      if (this.getPaginationInfo.next) {
        this.$store.dispatch("changePage", {
          url: this.getPaginationInfo.next,
        });
      }
    },
    decrementPage() {
      if (this.getPaginationInfo.prev) {
        this.$store.dispatch("changePage", {
          url: this.getPaginationInfo.prev,
        });
      }
    },
  },
};
</script>
<style lang="scss">
.pagination {
  width: 100%;
  padding: 0 3%;
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  align-items: center;
  button {
    padding: 5px;
    border: none;
    background: none;
    cursor: pointer;
    margin-left: 10px;
    color: #000;
  }
  .prev {
    margin-left: 20px;
  }
  .disable {
    color: #a8a8a8;
  }
}
</style>
