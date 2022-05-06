/*
 * @Author: Miya
 * @Date: 2022-05-05 22:12:22
 * @LastEditTime: 2022-05-06 23:38:14
 * @LastEditors: Miya
 * @Description: Sidebar in Content Page
 * @FilePath: \front\src\layout\components\ContentSidebar.tsx
 */
import { defineComponent, reactive } from 'vue';
import { DirectoryReturn } from '../../mock/dist';

const dataList = reactive(DirectoryReturn);

const ContentSidebar = defineComponent({
  setup() {
    return { dataList };
  },
  render() {
    return (
      <section class="app__sidebar">
        {dataList.data.map((rootListItem, index) => {
          return (
            <section class="app__sidebar--list">
              <div class="title">{rootListItem.title}</div>
              <div class="item" key={index}>
                {rootListItem.dist}
              </div>
            </section>
          );
        })}
      </section>
    );
  },
});

export default ContentSidebar;
