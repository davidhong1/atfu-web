import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    devUrl: "http://127.0.0.1:8010/atfu"
};
const store = new Vuex.Store({
    state
});

export default store;
