/*
 * @Description: Router index
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-24 12:00:55
 * @LastEditors: Mirage
 * @LastEditTime: 2022-04-24 17:29:22
 */
import Router from 'koa-router';
import CombineRouters from 'koa-combine-routers';

import File from '../services/File';

const router = new Router();

const index = router.get('/', async (ctx: any, next: any) => {
  const a = await new File('1').getFile();
  await ctx.render('index', { title: 3, message: a });
});

const routers = CombineRouters(index);

export default routers;
