<template>
  <div>
    <h1>Vue E-Commerce Store</h1>
    <ProductList />
    <Cart />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';

export default {
  components: {
    ProductList,
    Cart
  }
};
</script>