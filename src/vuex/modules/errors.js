import {
  RECEIVE_ERRORS,
} from '../mutation-types';

export default {
  state: {
    all: [],
  },
  mutations: {
    [RECEIVE_ERRORS](state, errors) {
      Object.assign(state, { all: errors });
    },
  },
};