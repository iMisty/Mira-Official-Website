/*
 * @Author: Miya
 * @Date: 2020-07-26 03:57:56
 * @LastEditTime: 2020-10-15 02:15:44
 * @LastEditors: Miya
 * @Description: 路由首页
 * @FilePath: /Single-Search-Backend/src/router/index.ts
 */
import * as Router from 'koa-router';
import * as combineRouters from 'koa-combine-routers';
// 测试用
import testRouter from './test';
// 链接数据
import linkRouter from './link';
// 管理员及登录相关
import adminRouter from './admin';

const router = new Router();

const index = router.get('/', async (ctx) => {
	ctx.body = 'Hello TypeScript';
});

const routers = combineRouters(index,linkRouter, adminRouter, testRouter);

export default routers;
