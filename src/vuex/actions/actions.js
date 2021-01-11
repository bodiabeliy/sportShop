import axios from 'axios'

export default {
  GET_PRODUCTS_FROM_API ({ commit }) {
    return axios('http://localhost:3000/products', {
      method: 'GET'
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data)
        return products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  },
  ADD_TO_CART ({ commit }, product) {
    commit('SET_CART', product)
  },
  DELETE_FROM_CART ({ commit }, index) {
    commit('REMOVE', index)
  },
  GET_SEACH_VUEX ({ commit }, value) {
    commit('SET_VALUE', value)
  }
}
