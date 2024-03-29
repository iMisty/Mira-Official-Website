/*
 * @Description: APP
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-24 12:00:55
 * @LastEditors: Miya
 * @LastEditTime: 2022-05-03 21:46:13
 */
import Koa from 'koa';
const app = new Koa();
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
app.use(router());
app.listen(7752);
console.log('APP Listening on Port: 7752');

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
