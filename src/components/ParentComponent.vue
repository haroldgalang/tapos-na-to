<template>
  <h1>Parent Component</h1>
  <p>Count: {{ count }}</p>
  <ChildComponent />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ChildComponent,
  },
  computed: {
    ...mapGetters(["count"]),
    count() {
      return this.getCount;
    },
  },
};
</script>
