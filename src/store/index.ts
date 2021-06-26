/*
 * @Author: Miya
 * @Date: 2021-06-28 00:51:13
 * @LastEditTime: 2021-06-28 00:52:35
 * @LastEditors: Miya
 * @Description: Vuex
 * @FilePath: \Single-Search-Backend\src\store\index.ts
 */
import { createStore } from 'vuex';

const defaultStore = {};

const store = createStore({
  state() {
    return defaultStore;
  },
  mutations: {},
  actions: {},
});

export default store;
