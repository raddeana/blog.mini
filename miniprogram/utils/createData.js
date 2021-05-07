/**
 * 创建数据
 * @author Chenxiangyu
 */
export function createData () {
    const arr = []

    for (let i = 0, len = 10; i < len; i ++) {
        const obj = {
            id: (Math.random() * 10000000)
        }

        let randomNumber = (Math.random() * 1000);

        if (randomNumber <= 300) {
            obj.type = 'project'
            obj.title = `project${(Math.random() * 1000).toFixed(2)}`
        } else if (randomNumber <= 600) {
            obj.type = 'content'
            obj.title = `content${(Math.random() * 1000).toFixed(2)}`
        } else {
            obj.type = 'schedule'
            obj.title = `schedule${(Math.random() * 1000).toFixed(2)}`
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