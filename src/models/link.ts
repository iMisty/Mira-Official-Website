/*
 * @Author: Miya
 * @Date: 2020-07-15 00:50:17
 * @LastEditors: Miya
 * @LastEditTime: 2020-07-29 22:29:39
 * @Description: 链接API
 * @FilePath: \Single-Search-Server\src\models\link.ts
 */
import * as Mongoose from 'mongoose';
const linkSchema = new Mongoose.Schema({
	series: String,
	link: [
		{
			id: Number,
			icon: String,
			href: String,
			name: String,
		},
	],
});

module.exports = Mongoose.model('Link', linkSchema);
