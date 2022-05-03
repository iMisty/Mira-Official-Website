/*
 * @Description: 文件相关
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-24 17:07:19
 * @LastEditors: Miya
 * @LastEditTime: 2022-05-04 02:48:35
 */
import { stat, readdir, readFile, mkdir } from 'fs/promises';
import { marked } from 'marked';
import CustomReturn from '../services/CustomReturn';

interface DirList {
  title: String;
  dist: Array<DirList | String>;
}

interface ReturnData<T> {
  code: number;
  data: T;
  msg: string;
}

class File {
  /**
   * @description Root Directory Name in Docs
   */
  public filePath: string;

  /**
   * @constructor
   * @param filePath Root Directory Name
   */
  constructor(filePath: string = 'docs') {
    this.filePath = filePath;
    this.checkRootDir();
  }

  /**
   * @description Check Root Docs Directory Status
   * @returns {boolean}
   */
  private async checkRootDir(): Promise<boolean> {
    try {
      const result = await readdir(__dirname + `/../${this.filePath}`);
      console.log(result);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  /**
   * @description Set Dir List in docs
   * @returns {Promise<Array<DirList> | null>}
   */
  private async setDirList(
    subFilePath: string = ''
  ): Promise<Array<DirList> | null> {
    try {
      const checkRoot = await this.checkRootDir();
      if (!checkRoot) {
        console.log('No Root');
        await mkdir(`${__dirname}/../${this.filePath}`);
        return null;
      }
      // Get Root Dir List
      const getDirWithRoot = await readdir(
        __dirname + `/../${this.filePath}/${subFilePath}`,
        'utf-8'
      );
      console.log('Read Dir: ' + getDirWithRoot);
      let arrayDir: Array<DirList> = new Array(getDirWithRoot.length);

      // Get Second Dir List
      for (let i = 0; i < getDirWithRoot.length; i++) {
        const getStatus = await stat(
          __dirname + `/../docs/${subFilePath}/` + getDirWithRoot[i]
        );
        const isDirectory = getStatus.isDirectory();

        // File in this dictionary
        if (!isDirectory) {
          arrayDir[i] = {
            title: null,
            dist: [getDirWithRoot[i]],
          };
        }

        // File in sub dictionary
        if (isDirectory) {
          const getDirListWithSecond = await readdir(
            __dirname + `/../docs/${subFilePath}/` + getDirWithRoot[i]
          );
          console.log(getDirListWithSecond);
          arrayDir[i] = {
            title: getDirWithRoot[i],
            dist: getDirListWithSecond,
          };
        }
      }
      if (subFilePath === '') {
        // Get Third Dir List
        for (let i = 0; i < arrayDir.length; i++) {
          let arrayForSecond = new Array(arrayDir[i].dist.length);
          for (let j = 0; j < arrayDir[i].dist.length; j++) {
            const result = await this.getSecondList(
              arrayDir[i].title as string,
              arrayDir[i].dist[j] as string
            );
            arrayForSecond[j] = result;
          }
          arrayDir[i].dist = arrayForSecond;
        }
      }

      return arrayDir;
    } catch (error) {
      // TODO: another error
      console.log(error);
      return null;
    }
  }

  /**
   *
   * @param dir
   * @param file
   * @returns
   */
  private async setFileData(dir: string, file: string) {
    try {
      const getReadFile = await readFile(
        __dirname + `/../${this.filePath}/${dir}/${file}.md`,
        'utf-8'
      );
      console.log(getReadFile);
      return getReadFile;
    } catch (error) {
      // TODO: another error
      console.log(error);
      if (error.errno === -4058) {
        return new CustomReturn(4004, 'No Such of Directory').setErrorMessage(
          null
        );
      }
    }
  }

  /**
   * @description Get Dir List for API
   * @param filePath
   * @returns
   */
  public async getDirList(filePath: string = '') {
    try {
      const getDirList = await this.setDirList(filePath);
      console.log('Dir: ', getDirList);
      if (getDirList === null) {
        throw getDirList;
      }
      return new CustomReturn(200, 'ok').setErrorMessage(getDirList);
    } catch (error) {
      // TODO: another error
      console.log(error);
      return new CustomReturn(
        4006,
        'No Such of Directory but Make,Please Refresh'
      ).setErrorMessage(null);
    }
  }

  /**
   * @description Get Second List Data
   * @param rootPath {string} First Docs Directory
   * @param secondPath {string} Second Docs Directory
   * @returns {Promise<DirList>}
   */
  private async getSecondList(
    rootPath: string,
    secondPath: string
  ): Promise<DirList | string> {
    const getStatus = await stat(
      __dirname + `/../${this.filePath}/${rootPath}/${secondPath}`
    );
    const isDirectory = getStatus.isDirectory();
    if (!isDirectory) {
      return secondPath;
    }
    const getDirWithSecond = await readdir(
      __dirname + `/../${this.filePath}/${rootPath}/${secondPath}`,
      'utf-8'
    );
    return { title: secondPath, dist: getDirWithSecond };
  }

  /**
   * @description Set File Data to HTML Format
   * @param fileData {string} markdown file
   * @returns {string | null} HTML Data
   */
  private setFileDataToHTML(fileData: string): string | null {
    if (!fileData) {
      return null;
    }
    return marked(fileData);
  }

  /**
   * @description Get FileData for API
   * @param dir {string} Directory Name
   * @param file {string} FileName without Extension
   * @returns {ReturnData<DirList>}
   */
  public async getFileData(
    dir: string,
    file: string
  ): Promise<ReturnData<DirList>> {
    try {
      const getFileData = await this.setFileData(dir, file);
      // false: No such of file
      if (typeof getFileData !== 'string') {
        throw getFileData;
      }
      const convertToHtml = this.setFileDataToHTML(getFileData);
      return new CustomReturn(200, 'ok').setErrorMessage(
        this.setFileDataToHTML(convertToHtml)
      );
    } catch (error) {
      // TODO: another error
      console.log(error);
      return new CustomReturn(4004, 'No Such of Directory').setErrorMessage(
        null
      );
    }
  }
}

export default File;
