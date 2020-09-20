/*
 * @Author: Miya
 * @Date: 2020-07-14 18:01:06
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-29 19:56:06
 * @Description: 测试用：人物模型
 * @FilePath: \Single-Search-Server\src\models\test.ts
 */
import * as Mongoose from 'mongoose';

const testSchema = new Mongoose.Schema({
	name: String,
	age: Number,
});

module.exports = Mongoose.model('Test', testSchema);
