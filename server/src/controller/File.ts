/*
 * @Description: 文件相关
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-24 17:07:19
 * @LastEditors: Miya
 * @LastEditTime: 2022-05-07 00:39:14
 */
import { stat, readdir, readFile, mkdir } from 'fs/promises';
import { marked } from 'marked';
import CustomReturn from '../services/CustomReturn';

interface DirList {
  title: String;
  dist: Array<String>;
  sub: DirList | Array<null>;
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
   * @description Set Root Dir List in docs
   * @returns {Promise<Array<String> | null>}
   */
  private async setRootDirList(): Promise<Array<String> | null> {
    try {
      const checkRoot = await this.checkRootDir();
      if (!checkRoot) {
        console.log('No Root');
        await mkdir(`${__dirname}/../${this.filePath}`);
        return null;
      }
      // Get Root Dir List
      const getDirWithRoot = await readdir(
        __dirname + `/../${this.filePath}`,
        'utf-8'
      );
      let arrayDir: Array<String> = new Array(getDirWithRoot.length);
      console.log('Read Dir: ' + getDirWithRoot);
      arrayDir = getDirWithRoot;
      return arrayDir;
    } catch (error) {
      // TODO: another error
      console.log(error);
      return null;
    }
  }

  /**
   * @description Get Root Dir List in docs
   * @returns {Promise<ReturnData<String> | null>}
   */
  public async getRootDirList(): Promise<ReturnData<string> | null> {
    try {
      const getRootDir = await this.setRootDirList();
      return new CustomReturn(200, 'ok').setErrorMessage(getRootDir);
    } catch (error) {
      console.log(error);
    }
  }

  private async setInnerDirList(rootPath: string) {
    if (!rootPath) {
      throw new Error('Invalid Param');
    }

    const getDirWithInner = await readdir(
      __dirname + `/../${this.filePath}/${rootPath}`,
      'utf-8'
    );
    console.log(getDirWithInner);
    const arrayTempInner = getDirWithInner;
    const arrayReturn: any = { dist: [], sub: [] };

    for (let i = 0; i < arrayTempInner.length; i++) {
      const checkStatus = await this.setCheckFileStatus(
        rootPath,
        arrayTempInner[i]
      );
      console.log(checkStatus);
      if (checkStatus.isDirectory) {
        const getThirdFileList = await this.setThirdFileList(
          rootPath,
          arrayTempInner[i]
        );
        arrayReturn.sub.push(getThirdFileList);
      } else {
        arrayReturn.dist.push(arrayTempInner[i]);
      }
    }
    console.log(arrayReturn);
    return arrayReturn;
  }

  private async setThirdFileList(rootPath: string, innerPath: string) {
    try {
      const getDirWithInner = await readdir(
        __dirname + `/../${this.filePath}/${rootPath}/${innerPath}`,
        'utf-8'
      );
      return { title: innerPath, file: getDirWithInner };
    } catch (error) {
      return { title: innerPath, file: null as any };
    }
  }

  public async getInnerDirList(rootPath: string) {
    try {
      const result = await this.setInnerDirList(rootPath);
      console.log(result);
      return new CustomReturn(200, 'ok').setErrorMessage(result);
    } catch (error) {
      return new CustomReturn(400, error).setErrorMessage(null);
    }
  }

  private async setCheckFileStatus(rootPath: string, innerPath: string) {
    const getStatus = await stat(
      __dirname + `/../${this.filePath}/${rootPath}/${innerPath}`
    );
    const isDirectory = getStatus.isDirectory();
    return { title: innerPath, isDirectory };
  }

  /**
   * @description Read File Data
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
  // public async getDirList(filePath: string = '') {
  //   try {
  //     const getDirList = await this.setDirList(filePath);
  //     console.log('Dir: ', getDirList);
  //     if (getDirList === null) {
  //       throw getDirList;
  //     }
  //     return new CustomReturn(200, 'ok').setErrorMessage(getDirList);

  //   } catch (error) {
  //     // TODO: another error
  //     console.log(error);
  //     return new CustomReturn(
  //       4006,
  //       'No Such of Directory but Make,Please Refresh'
  //     ).setErrorMessage(null);
  //   }
  // }

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
    return { title: secondPath, dist: getDirWithSecond, sub: [] };
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
