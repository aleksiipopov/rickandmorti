<template>
  <SubHeader />
  <ListOfItems :items="items" />
  <PaginationBlock />
</template>

<script>
import SubHeader from "../components/SubHeader";
import ListOfItems from "../components/ListOfItems";
import PaginationBlock from "../components/PaginationBlock";

export default {
  components: {
    SubHeader,
    ListOfItems,
    PaginationBlock,
  },
  props: ["items"],
};
</script>
