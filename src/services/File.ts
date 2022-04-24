/*
 * @Description: 文件相关
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-24 17:07:19
 * @LastEditors: Mirage
 * @LastEditTime: 2022-04-24 18:01:22
 */
import { readFile } from 'fs/promises';
import { marked } from 'marked';

class File {
  public filePath: string;
  constructor(filePath: string) {
    this.filePath = filePath;
  }

  public async getFile(file = this.filePath) {
    console.log(file);
    console.log(__dirname);
    const getFileContent = await readFile(__dirname + '/../docs/3.md', 'utf-8');
    console.log();
    return marked.parse(getFileContent);
  }
}

export default File;
