/**
 * 内容列表
 * @author Philip
 */

function createData () {
	const arr = []

	for (let i = 0, len = 10; i < len; i ++) {
		const obj = {
			title: (Math.random() * 1000).toFixed(2)
		}

		if (obj.title <= 300) {
			obj.type = 'project'
		} else if (obj.title <= 600) {
			obj.type = 'content'
		} else {
			obj.type = 'schedule'
		}

		if (obj.type === 'project') {
			obj.items = [{
				state: (Math.random() * 1000).toFixed(2),
				title: (Math.random() * 1000).toFixed(2),
				value: 1
			}, {
				state: (Math.random() * 1000).toFixed(2),
				title: (Math.random() * 1000).toFixed(2),
				value: 2
			}, {
				state: (Math.random() * 1000).toFixed(2),
				title: (Math.random() * 1000).toFixed(2),
				value: 3
			}]
		} else if (obj.type === 'schedule') {
			obj.items = [{
				state: (Math.random() * 1000).toFixed(2),
				timestamp: 1585051677983,
				title: (Math.random() * 1000).toFixed(2)
			}, {
				state: (Math.random() * 1000).toFixed(2),
				timestamp: 1585051677983,
				title: (Math.random() * 1000).toFixed(2)
			}, {
				state: 'success',
				timestamp: 1585051677983,
				title: (Math.random() * 1000).toFixed(2)
			}]
		} else {
			obj.content = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
		}

		arr.push(obj)
	}

	return arr
}

Page({
	data: {
		list: createData()
	},

	onReachBottom () {
		const data = createData()
		const currData = this.data.list

		this.setData({
			list: data.concat(currData)
		})
	}
})