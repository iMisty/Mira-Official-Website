/*
 * @Author: Miya
 * @Date: 2022-05-05 21:42:18
 * @LastEditTime: 2022-05-06 23:12:17
 * @LastEditors: Miya
 * @Description: Content Page Layout
 * @FilePath: \front\src\layout\Content.tsx
 */
import { defineComponent } from 'vue';
import Navbar from './components/GlobalNavBar';
import Sidebar from './components/ContentSidebar';
import '../style/container.less';

const LayoutContent = defineComponent({
  components: {
    'nav-bar': Navbar,
    'side-bar': Sidebar,
  },
  setup() {},

  render() {
    return (
      <div class="app__container material-theme light-theme ">
        {/* Navigation Bar Start */}
        <nav class="app__container--navigation">
          <nav-bar></nav-bar>
        </nav>
        {/* Navigation Bar End */}

        {/* Sidebar Start */}
        <aside class="app__container--sidebar">
          <side-bar></side-bar>
        </aside>
        {/* Sidebar End */}

        {/* Content Start */}
        <main class="app__container--content">
          <router-view></router-view>
        </main>
        {/* Content End */}
      </div>
    );
  },
});

export default LayoutContent;
