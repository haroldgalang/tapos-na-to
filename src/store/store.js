import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Washing Machine', price: 200 },
      { id: 2, name: 'Refrigerator', price: 350 },
      { id: 3, name: 'Microwave Oven', price: 120 },
      { id: 4, name: 'Dishwasher', price: 300 },
      { id: 5, name: 'Air Conditioner', price: 400 },
      { id: 6, name: 'Vacuum Cleaner', price: 150 },
      { id: 7, name: 'Electric Kettle', price: 40 },
      { id: 8, name: 'Coffee Maker', price: 60 },
      { id: 9, name: 'Toaster', price: 30 },
      { id: 10, name: 'Blender', price: 80 }
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