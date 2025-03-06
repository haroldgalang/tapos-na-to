<template>
  <h1>Child Component</h1>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment", "decrement"]),
  },
};
</script>
