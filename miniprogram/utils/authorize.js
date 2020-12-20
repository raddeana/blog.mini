/**
 * 用户登录信息本地存储
 * @author Philip
 */
import { post } from './request.js'
import { auth, checkAuth } from './apis.js'

/**
 * 用户是否已授权
 * @return none
 */
export function checkSession () {
    wx.checkSession({
        /**
         * 请求成功
         * @Hanlder
         */
        success: function (res) {
            loginRemote(res)
        },
        /**
         * 请求失败
         * @Hanlder
         */
        fail: function () {
            login()
        }
    })
}

/**
 * 用户授权
 * @return none
 */
export function login () {
    wx.login({
        /**
         * 请求成功
         * @Hanlder
         */
        success: function (res) {
            loginRemote(res)
        },
        /**
         * 请求失败
         * @Hanlder
         */
        fail: function () {
            wx.redirectTo({
                url: '/pages/login/login'
            })
        }
    })
}

export function loginRemote (res) {
    wx.switchTab({
        url: '/pages/home/home'
    })

    // post(auth, { token: res.code }).then(function () {
    //     wx.redirectTo({
    //         url: '/pages/home/home'
    //     })
    // }, function () {
    //     wx.redirectTo({
    //         url: '/pages/login/login'
    //     })
    // })
}