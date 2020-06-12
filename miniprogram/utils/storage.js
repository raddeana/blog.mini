/**
 * 小程序本地存储
 * @author Philip
 */

/**
 * 存储数据
 * @param {string} 数据键
 * @param {any} 存储的数据值，够通过JSON.stringify序列化的对象
 * @return {promise}
 */
export function setStorage (key, data) {
    return new Promise(function (resolve, reject) {
        wx.setStorage({
            key,
            data,
            success () {
                resolve()
            },
            fail () {
                reject(new Error('存储失败，检查是否大小超过上限'))
            }
        })
    })
}

/**
 * 获取数据
 * @param {string} 数据键
 * @return {promise}
 */
export function getStorage (key) {
    return new Promise(function (resolve, reject) {
        wx.getStorage({
            key,
            success (res) {
                resolve(res.data)
            },
            fail () {
                reject(new Error('获取存储内容失败，检查key值是否存在'))
            }
        })
    })
}

/**
 * 存储token
 * @param {any} token
 * @return {promise}
 */
export function setToken (data) {
    return setStorage('token', data)
}

/**
 * 获取token
 * @return {promise}
 */
export function getToken () {
    return getStorage('token')
}