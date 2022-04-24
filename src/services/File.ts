/*
 * @Description: 文件相关
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-24 17:07:19
 * @LastEditors: Miya
 * @LastEditTime: 2022-04-24 22:46:47
 */
import { readdir, readFile } from 'fs/promises';
import { marked } from 'marked';

class File {
  public filePath: string;
  constructor(filePath: string) {
    this.filePath = filePath;
  }

  public async getDir() {
    const a = await readdir(__dirname + '/../docs/', 'utf-8');
    let b: Array<any> = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      const c = await readdir(__dirname + '/../docs/' + a[i], 'utf-8');
      console.log(c);
      b[i] = { title: a[i], dist: c };
    }
    return b;
  }

  public async getFile(file = this.filePath) {
    return await readFile(__dirname + '/../docs/' + file, 'utf-8');
  }
}

export default File;
