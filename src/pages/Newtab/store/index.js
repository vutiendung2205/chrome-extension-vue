import { createStore } from 'vuex';

// Create a new store instance.

const store = createStore({
  state() {
    return {
      search: '',
    };
  },
  actions: {
    searchKeyWords({ commit }, payload) {
      const searchKeyWords = encodeURI(payload.keys);
      window.location.href = `https://www.google.com/search?q=${searchKeyWords}`;
    },
  },
});

export default store;
