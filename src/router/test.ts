import routers from '.';

/*
 * @Author: Miya
 * @Date: 2020-07-14 17:55:17
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-30 03:43:26
 * @Description: file content
 * @FilePath: \Single-Search-Server\src\router\test.ts
 */
const router = require('koa-router')();
const Person = require('../models/test');

const User = require('../controller/Test');

router.prefix('/test');

// 默认输出
router.get('/', User.defaultMsg);
// 增加用户
router.post('/', User.addNewUser);
// 查找单个用户
router.get('/one', User.findOne);
// 查找条件用户
router.get('/condition', User.findUser);
// 查找所有用户
router.get('/info', User.findAll);
// 修改用户信息
router.put('/', User.changeInfo);
// 删除用户
router.del('/', User.removeUser);

export default router;
