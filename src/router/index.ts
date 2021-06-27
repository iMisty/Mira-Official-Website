/*
 * @Author: Miya
 * @Date: 2021-06-28 00:47:09
 * @LastEditTime: 2021-06-28 00:49:45
 * @LastEditors: Miya
 * @Description: Router
 * @FilePath: \Single-Search-Backend\src\router\index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home';
const routes = [
  {
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
