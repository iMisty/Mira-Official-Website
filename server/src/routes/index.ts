/*
 * @Description: Router index
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-24 12:00:55
 * @LastEditors: Miya
 * @LastEditTime: 2022-05-03 21:58:07
 */
import Router from 'koa-router';
import CombineRouters from 'koa-combine-routers';
import type { Context } from 'koa';

import routerFiles from './files';

const router = new Router();

const index = router.get('/', async (ctx: Context) => {
  ctx.body = 'Hello TypeScript';
});


const routers = CombineRouters(index, routerFiles);

export default routers;
