/*
 * @Description: Router index
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-24 12:00:55
 * @LastEditors: Miya
 * @LastEditTime: 2022-04-24 22:35:35
 */
import Router from 'koa-router';
import CombineRouters from 'koa-combine-routers';

import File from '../services/File';

const router = new Router();

const index = router.get('/', async (ctx: any, next: any) => {
  const a = await new File('1').getDir();
  console.log(a);
  await ctx.render('index', { title: 1, message: JSON.stringify(a) });
  next();
});

const dist = router.get('/dist', async (ctx: any, next: any) => {
  const a = await new File('doc1/doc1-1/4.md').getFile();
  await ctx.render('dist', { title: 3, container: a });
});

const routers = CombineRouters(index, dist);

export default routers;
