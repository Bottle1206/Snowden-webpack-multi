import Vue from 'vue'
import Vuex from 'vuex'
import ah from '../util/request.js';
import api from './api.js';

Vue.use(Vuex);

Vue.config.devtools = true;

const state = {
  
}

const actions = {
  query ({ commit, state }, payload) { }
}

const mutations = {
  updateState (state, payload) {
    state = Object.assign(state, payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})