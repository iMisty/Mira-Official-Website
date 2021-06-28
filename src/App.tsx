/*
 * @Author: Miya
 * @Date: 2021-06-28 00:29:06
 * @LastEditTime: 2021-06-28 00:56:33
 * @LastEditors: Miya
 * @Description: index
 * @FilePath: \Single-Search-Backend\src\App.tsx
 */
import { defineComponent } from 'vue';

const App = defineComponent({
  render() {
    return (
      <div id="app">
        <router-view></router-view>
      </div>
    );
  },
});
export default App;
