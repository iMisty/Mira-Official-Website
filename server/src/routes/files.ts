/*
 * @Author: Miya
 * @Date: 2022-05-03 21:50:39
 * @LastEditTime: 2022-05-04 02:22:50
 * @LastEditors: Miya
 * @Description: Get Dir and File Data
 * @FilePath: \Kagura-Koa-Documents\src\routes\files.ts
 */
import Router from 'koa-router';
import type { Context } from 'koa';

import FileController from '../controller/File';

const router = new Router({ prefix: '/dist' });

router.get('/', async (ctx: Context): Promise<void> => {
  const getList = await new FileController('docs6').getDirList();
  ctx.body = getList;
});

router.get('/:dir', async (ctx: Context) => {
  const { dir } = ctx.params;
  const { file } = ctx.query;
  console.log('File:  ', ctx.query.file);
  if (!file && dir) {
    const getList = await new FileController('docs').getDirList(dir);
    ctx.body = getList;
    return true;
  }
  if (file && dir) {
    const getList = await new FileController('docs').getFileData(
      `${dir}`,
      file as string
    );
    ctx.body = getList;
    return true;
  }
});

router.get('/:dir/:secDir', async (ctx: Context) => {
  const { dir, secDir } = ctx.params;
  const { file } = ctx.query;
  if (!file && dir) {
    const getList = await new FileController('docs').getDirList(
      `${dir}/${secDir}`
    );
    ctx.body = getList;
    return true;
  }
  if (file && dir) {
    const getList = await new FileController('docs').getFileData(
      `${dir}/${secDir}`,
      file as string
    );
    ctx.body = getList;
    return true;
  }
});

export default router;
