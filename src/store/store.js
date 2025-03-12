import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 15 },
      { id: 3, name: 'Product 3', price: 20 },
      { id: 4, name: 'Product 4', price: 25 },
      { id: 5, name: 'Product 5', price: 30 },
      { id: 6, name: 'Product 6', price: 35 },
      { id: 7, name: 'Product 7', price: 40 },
      { id: 8, name: 'Product 8', price: 45 },
      { id: 9, name: 'Product 9', price: 50 },
      { id: 10, name: 'Product 10', price: 55 }
    ],
    cart: []
  },
  mutations: {
    addToCart(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ id: productId, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        } else {
          state.cart.splice(index, 1);
        }
      }
    }
  },
  actions: {
    addToCart({ commit }, productId) {
      commit('addToCart', productId);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    }
  },
  getters: {
    cartItems(state) {
      return state.cart.map(item => {
        const product = state.products.find(p => p.id === item.id);
        return { ...product, quantity: item.quantity };
      });
    },
    totalItems(state) {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice(state) {
      return state.cart.reduce((sum, item) => {
        const product = state.products.find(p => p.id === item.id);
        return sum + (product.price * item.quantity);
      }, 0);
    }
  }
});