<template>
  <div>
    <h2>Shopping Cart</h2>
    <p>Total Items: {{ totalItems }}</p>
    <p>Total Price: ${{ totalPrice }}</p>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.quantity }} x ${{ item.price }}
        <button @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['cartItems', 'totalItems', 'totalPrice'])
  },
  methods: {
    ...mapActions(['removeFromCart'])
  }
};
</script>