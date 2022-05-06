/*
 * @Author: Miya
 * @Date: 2022-05-05 21:00:46
 * @LastEditTime: 2022-05-06 23:07:10
 * @LastEditors: Miya
 * @Description: Root
 * @FilePath: \front\src\App.tsx
 */
import { defineComponent } from 'vue';
import './style/normalize.less';
import './style/material.less';

const APP = defineComponent({
  name: 'APP',
  render() {
    return <router-view></router-view>;
  },
});

export default APP;
