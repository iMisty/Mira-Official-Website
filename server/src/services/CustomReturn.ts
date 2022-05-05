/*
 * @Author: Miya
 * @Date: 2022-05-03 19:33:25
 * @LastEditTime: 2022-05-03 20:46:27
 * @LastEditors: Miya
 * @Description: Custom Catch Error
 * @FilePath: \Kagura-Koa-Documents\src\services\CustomErrorCatch.ts
 */

class CustomReturn {
  private errorNumber: number;
  private errorMessage: string;

  constructor(errorNumber: number, errorMessage: string) {
    this.errorNumber = errorNumber;
    this.errorMessage = errorMessage;
  }

  public setErrorMessage(data: any) {
    return { code: this.errorNumber, data, msg: this.errorMessage };
  }
}

export default CustomReturn;
