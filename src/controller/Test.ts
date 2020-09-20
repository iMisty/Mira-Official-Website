/*
 * @Author: Miya
 * @Date: 2020-07-15 12:06:31
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-29 20:14:25
 * @Description: file content
 * @FilePath: \Single-Search-Server\src\controller\Test.ts
 */
import * as mongoose from 'mongoose';
const TestSchema = mongoose.model('Test');

class Test {
	// 默认输出
	static async defaultMsg(ctx: { body: string }) {
		ctx.body = 'this is a users response!';
	}
	// 增加用户
	static async addNewUser(ctx: any, next: any) {
		const testSchema = new TestSchema({
			name: ctx.request.body.name,
			age: ctx.request.body.age,
		});
		let code: number = undefined;
		try {
			await testSchema.save();
			code = 0;
		} catch (error) {
			code = -1;
			ctx.body = {
				code,
				msg: error,
			};
		}
		ctx.body = {
			code,
			msg: '添加成功',
		};
	}
	// 查找用户 => 单个
	static async findOne(
		ctx: {
			request: { body: { name: any } };
			body: { code: number; result?: mongoose.Document; msg?: any };
		},
		next: any
	) {
		const result = await TestSchema.findOne({
			name: ctx.request.body.name,
		});

		let code: number = undefined;
		try {
			ctx.body = {
				code: 0,
				result,
			};
		} catch (error) {
			ctx.body = {
				code: -1,
				msg: error,
			};
		}
	}
	// 查找用户 => 条件
	static async findUser(
		ctx: {
			request: { body: { name: string } };
			body: { code: number; results?: mongoose.Document[]; msg?: any };
		},
		next: any
	) {
		const results = await TestSchema.find({
			name: ctx.request.body.name,
		});
		let code: number = undefined;
		try {
			ctx.body = {
				code: 0,
				results,
			};
		} catch (error) {
			ctx.body = {
				code: -1,
				msg: error,
			};
		}
	}
	// 查找用户 => 全部
	static async findAll(
		ctx: {
			body: { code: number; allResults?: mongoose.Document[]; msg?: any };
		},
		next: any
	) {
		const allResults = await TestSchema.find();
		let code: number = undefined;
		try {
			ctx.body = {
				code: 0,
				allResults,
			};
		} catch (error) {
			ctx.body = {
				code: -1,
				msg: error,
			};
		}
	}
	// 修改用户
	static async changeInfo(ctx: any, next: any) {
		//@ts-ignore
		const result = await TestSchema.where({
			name: ctx.request.body.name,
		}).update({
			age: ctx.request.body.age,
		});
		let code: number = undefined;
		try {
			code = 200;
			ctx.body = {
				code,
				msg: '修改成功',
			};
		} catch (error) {
			code = 400;
			ctx.body = {
				code,
				msg: error,
			};
		}
	}
	// 删除用户
	static async removeUser(
		ctx: {
			request: { body: { name: unknown } };
			body: { code: number; msg?: any };
		},
		next: any
	) {
		// @ts-ignore
		const result = await TestSchema.where({
			name: ctx.request.body.name,
		}).remove();
		try {
			ctx.body = {
				code: 0,
			};
		} catch (error) {
			ctx.body = {
				code: -1,
				msg: error,
			};
		}
	}
}

// 原先使用export default会导致无法认出
module.exports = Test;
