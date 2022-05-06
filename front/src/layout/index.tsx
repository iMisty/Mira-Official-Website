/*
 * @Author: Miya
 * @Date: 2022-05-05 21:42:08
 * @LastEditTime: 2022-05-05 21:53:26
 * @LastEditors: Miya
 * @Description: Index Page Layout
 * @FilePath: \front\src\layout\index.tsx
 */
import { defineComponent } from 'vue';

const LayoutIndex = defineComponent({
  setup() {},
  render() {
    return (
      <section class="app">
        <nav class="app__navigator"></nav>
        <main class="app__container">
          <router-view></router-view>
        </main>
      </section>
    );
  },
});

export default LayoutIndex;
