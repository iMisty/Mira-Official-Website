/*
 * @Author: Miya
 * @Date: 2022-05-06 23:18:00
 * @LastEditTime: 2022-05-06 23:18:01
 * @LastEditors: Miya
 * @Description: Mock Directory Return
 * @FilePath: \front\src\mock\dist.ts
 */

export const DirectoryReturn = {
  code: 200,
  data: [
    {
      title: 'doc1',
      dist: [
        '444.md',
        {
          title: 'doc1-1',
          dist: ['3.md', '4.md'],
        },
        {
          title: 'doc1-2',
          dist: ['2.md'],
        },
      ],
    },
    {
      title: 'doc2',
      dist: [
        {
          title: 'doc2-1',
          dist: [],
        },
      ],
    },
    {
      title: 'doc3',
      dist: ['6.md', '开设.md'],
    },
    {
      title: 'doc4',
      dist: [],
    },
  ],
  msg: 'ok',
};
