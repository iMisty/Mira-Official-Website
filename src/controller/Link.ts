/*
 * @Author: Miya
 * @Date: 2020-07-15 12:06:23
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-30 04:14:33
 * @Description: 导航链接操作方法
 * @FilePath: \Single-Search-Server\src\controller\Link.ts
 */
import * as mongoose from 'mongoose';
const LinkSchema = mongoose.model('Link');

class Link {
	// 增加链接
	static async addNewLink(ctx: any) {
		// 基础数据
		const series = ctx.request.body.series;
		const link = ctx.request.body.link;
		// @ts-ignore
		const temp = await LinkSchema.where({
			series,
		});
		console.log(`temp: ${temp}`);
		if (!series && !link) {
			ctx.body = {
				code: 402,
				msg: 'param error',
			};
			return;
		}
		// 若类目为空则新建类目
		if (temp.length === 0) {
			const result = await new LinkSchema({
				series,
				link,
			});
			console.log(`Data-Non:${result}`);
			try {
				await result.save();
				ctx.body = {
					code: 200,
					msg: 'ok',
					data: result,
				};
			} catch (err) {
				ctx.body = {
					code: 400,
					msg: err,
				};
			}
			return;
		}
		// 若类目不为空则插入数据
		// @ts-ignore
		const result = await LinkSchema.where({ series }).update({
			link,
		});
		console.log(`Data-Had:${result}`);
		try {
			ctx.body = {
				code: 200,
				msg: 'ok',
				data: result,
			};
		} catch (err) {
			ctx.body = {
				code: 400,
				msg: err,
			};
		}
	}
	// 查询所有链接
	static async searchLink(ctx: any) {
		const result = await LinkSchema.find();
		try {
			ctx.body = {
				code: 200,
				data: result,
				msg: 'ok',
			};
		} catch (err) {
			ctx.body = {
				code: 400,
				msg: err,
			};
		}
	}
	// 条件筛选 => 类目
	static async screenLink(ctx: any) {
		const result = await LinkSchema.find({
			series: ctx.request.body.series,
		});
		try {
			ctx.body = {
				code: 200,
				data: result,
				msg: 'ok',
			};
		} catch (err) {
			ctx.body = {
				code: 400,
				msg: err,
			};
		}
	}
}

module.exports = Link;
