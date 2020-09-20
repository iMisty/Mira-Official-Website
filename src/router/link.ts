/*
 * @Author: Miya
 * @Date: 2020-07-15 00:50:17
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-30 04:12:08
 * @Description: 导航链接路由
 * @FilePath: \Single-Search-Server\src\router\link.ts
 */
import * as Router from 'koa-router';
const router = new Router();
const model = require('../models/link');
const Link = require('../controller/Link');

router.prefix('/link');

// 查询链接
router.get('/', Link.searchLink);
// 增加链接
router.post('/add', Link.addNewLink);
// 修改链接
// router.put('/', Link.updateLink);
// 删除链接
// router.delete('/', Link.removeLink);
// 条件筛选 => 根据类目
router.get('/search', Link.screenLink);
export default router;
