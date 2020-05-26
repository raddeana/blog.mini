/**
 * 用户登录信息本地存储
 * @author Philip
 */
import { post } from './request.js'
import { auth, checkAuth } from './apis.js'

/**
 * 用户是否已授权
 * @return {primose} 
 */
export function authorized () {
    return new Promise(function (resolve, reject) {
        wx.checkSession({
            /**
             * 请求成功
             * @Hanlder
             */
            success: function (res) {
                console.log(res)
                resolve(post(auth, { token: res.code }))
            },
            /**
             * 请求失败
             * @Hanlder
             */
            fail: function () {
                resolve(authorize())
            }
        })
    })
}

/**
 * 用户授权
 * @return {primose}
 */
export function authorize () {
    return new Promise(function (resolve, reject) {
        wx.login({
            /**
             * 请求成功
             * @Hanlder
             */
            success: function (res) {
                resolve(post(auth, { token: res.code }))
            },
            /**
             * 请求失败
             * @Hanlder
             */
            fail: function () {
                reject()
            }
        })
    })
}