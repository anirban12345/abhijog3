import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        isLoggedin: false
      }
    },
    mutations: {
      funIsLoggedin (state) {
        state.isLoggedin=true
      }
    }
  })
  export default store;