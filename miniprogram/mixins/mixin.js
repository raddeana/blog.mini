/**
 * 混合模式
 * @author Philip
 */

// 定义小程序内置的属性 / 方法
const originProperties = ['data', 'properties', 'options']
const originMethods = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']
const originPage = Page

/**
 * 混合
 * @param {array}
 * @param {object}
 * @return {object}
 */
function merge (mixins, options) {
    mixins.forEach((mixin) => {
        if (Object.prototype.toString.call(mixin) !== '[object Object]') {
            throw new Error('mixin 类型必须为对象！')
        }

        for (let [key, value] of Object.entries(mixin)) {
            if (originProperties.includes(key)) {
                options[key] = { ...value, ...options[key] }
            } else if (originMethods.includes(key)) {
                let originFunc = options[key]

                options[key] = function (...args) {
                    value.call(this, ...args)

                    return originFunc && originFunc.call(this, ...args)
                }
            } else {
                options = { ...mixin, ...options }
            }
        }
    })

    return options
}

Page = (options) => {
    let mixins = options.mixins

    if (Array.isArray(mixins)) {
        delete options.mixins
        options = merge(mixins, options)
    }

    originPage(options)
}
