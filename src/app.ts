/*
 * @Description: APP
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-24 12:00:55
 * @LastEditors: Mirage
 * @LastEditTime: 2022-04-24 16:42:19
 */
import Koa from 'koa';
const app = new Koa();
import views from 'koa-views';
import json from 'koa-json';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import router from './routes/index';

app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(
  views(__dirname + '/views', {
    extension: 'ejs',
  })
);
app.use(router());
app.listen(7752);
console.log('Dirname:', __dirname);

// logger
app.use(async (ctx, next) => {
  const start: any = new Date();
  await next();
  const ms = (new Date() as any) - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

export default app;
