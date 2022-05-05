/*
 * @Author: Miya
 * @Date: 2022-05-05 21:36:10
 * @LastEditTime: 2022-05-05 21:42:25
 * @LastEditors: Miya
 * @Description: Vue Router Config
 * @FilePath: \front\src\router\router.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home';

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
