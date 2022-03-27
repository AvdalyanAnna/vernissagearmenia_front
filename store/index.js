import Vue from 'vue'
import Vuex from 'vuex'
import category from "~/store/module/category";
import products from './module/products'
import cart from './module/cart'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      category: category,
      products: products,
      cart: cart,
    }
  })
}
export default createStore