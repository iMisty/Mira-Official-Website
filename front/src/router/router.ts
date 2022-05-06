/*
 * @Author: Miya
 * @Date: 2022-05-05 21:36:10
 * @LastEditTime: 2022-05-06 22:46:18
 * @LastEditors: Miya
 * @Description: Vue Router Config
 * @FilePath: \front\src\router\router.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import LayoutIndex from '../layout/index';

const routes = [
  {
    path: '/',
    component: LayoutIndex,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('../pages/Home'),
      },
    ],
  },
  {
    path: '/dist',
    component: () => import('../layout/Content'),
    children: [
      {
        path: '',
        component: () => import('../pages/Dist'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
